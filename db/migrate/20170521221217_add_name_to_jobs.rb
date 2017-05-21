class AddNameToJobs < ActiveRecord::Migration
  def change
    add_reference :jobs, :customer, references: :users, index: true
    add_reference :jobs, :provider, references: :users, index: true
    add_foreign_key :jobs, :users, column: :customer_id
    add_foreign_key :jobs, :users, column: :provider_id
  end
end
