class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.text  :url
      t.boolean :is_deleted,  default: false
      t.boolean :is_active,  default: true
      t.timestamps null: false
    end
  end
end
