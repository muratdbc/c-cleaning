class AddJobIdToPhotos < ActiveRecord::Migration
  def change
    add_column :photos, :job_id, :integer
    add_index  :photos, :job_id
  end
end
