
class JobsController < ApplicationController
  skip_before_filter :verify_authenticity_token, only: [:create, :destroy,:presigned]
  def main
  end
  def create
    job = Job.new(job_params)

    if job.save
        render json: {status: 'Job created successfully'}, status: :created
      else
        render json: { errors: job.errors.full_messages }, status: :bad_request
      end
  end
  def index
    if params[:user_id]
      jobs=Job.where('customer_id = ?' , params[:user_id].to_i)
      render json: [jobs: jobs], status: :ok
      else
      jobs=Job.all.limit(2)
      render json: [jobs: jobs], status: :ok
    end
  end
  def show
    job=Job.find(params[:id])
    render json: {job: job}, status: :ok
  end

  def update
  end

  def destroy
    job=Job.find(params[:id])
    job.is_deleted=true
    updated_count=job.save!
    render json: {is_updated: updated_count}, status: :ok
  end
  def presigned
    if params[:filename] && params[:type]
      s3 = AWS::S3.new
      obj = s3.buckets[YOUR_TEMP_BUCKET].objects[params[:filename]]
      url = obj.url_for(:write, :content_type => params[:type], :expires => 10*60)  # Expires 10 Minutes
      render :json => {:url => url.to_s}
    else
      render :json => {:error => 'Invalid Params'}
    end
  end

  private

  def job_params
    params.require(:job).permit(:job_date, :notes, :job_time,:customer_id)
  end
end
