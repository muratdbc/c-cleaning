# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170603235128) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "jobs", force: :cascade do |t|
    t.date     "job_date"
    t.text     "notes"
    t.time     "job_time"
    t.boolean  "back_to_back"
    t.text     "access_code"
    t.text     "wifi_name"
    t.text     "wifi_password"
    t.text     "external_key"
    t.text     "external_source"
    t.boolean  "is_deleted",      default: false
    t.boolean  "is_active",       default: false
    t.text     "address_1"
    t.text     "city"
    t.text     "state"
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
    t.integer  "customer_id"
    t.integer  "provider_id"
  end

  add_index "jobs", ["customer_id"], name: "index_jobs_on_customer_id", using: :btree
  add_index "jobs", ["provider_id"], name: "index_jobs_on_provider_id", using: :btree

  create_table "photos", force: :cascade do |t|
    t.text     "url"
    t.boolean  "is_deleted", default: false
    t.boolean  "is_active",  default: true
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
    t.integer  "job_id"
    t.string   "image"
  end

  add_index "photos", ["job_id"], name: "index_photos_on_job_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.integer  "role"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

  add_foreign_key "jobs", "users", column: "customer_id"
  add_foreign_key "jobs", "users", column: "provider_id"
end
