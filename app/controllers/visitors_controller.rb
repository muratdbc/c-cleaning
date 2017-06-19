class VisitorsController < ApplicationController
  def cleanings
  end
  def customer
    cookies[:user_id] = current_user.id
  end
  def photos
    p params
  end
end
