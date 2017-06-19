class PhotosController < ApplicationController
  skip_before_filter :verify_authenticity_token, only: [:create,:destroy]
  def create
    @image = Photo.create!(photo_params)
    render :json =>{status:200}
  end

  def destroy
    @photo = Photo.find(params[:id])
    @photo.destroy
    render json: {status: 'Image deleted successfully'}, status: :deleted
    # redirect_to resumes_path, notice:  "The resume #{@resume.name} has been deleted."
  end
  private
  def photo_params
     params.permit(:job_id,:url)
  end
end
