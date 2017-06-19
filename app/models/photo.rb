class Photo < ActiveRecord::Base
  attr_accessor  :image
  belongs_to :job
  mount_uploader :image, ImageUploader
end
