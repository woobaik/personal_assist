class CitiesController < ApplicationController
  def search
    
    @cities = City.where("lower(name) LIKE ?", "#{params[:city].downcase}%").limit(20)
    render json: {
      cities: @cities
    }
  end

  def weather 
    
  end


end
