class CitiesController < ApplicationController
  before_action :city_finder, only: [:weather]
  def search
    
    @cities = City.where("lower(name) LIKE ?", "#{params[:city].downcase}%").limit(20)
    render json: {
      cities: @cities
    }
  end

  def weather 
    @weather_data = @city.weather
    render json: {
      weather: @weather_data
    }
  end

  private

  def city_finder
    @city ||= City.find_by_city_id(params[:city_id])
  end
end
