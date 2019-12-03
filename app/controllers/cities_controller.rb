class CitiesController < ApplicationController
  def search
    @cities = City.search_all_city_with_country(params[:city_name], params[:country_name])
    render json: {
      cities: @cities
    }
  end


end
