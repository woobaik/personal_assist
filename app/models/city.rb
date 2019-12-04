class City < ApplicationRecord
    def self.search_all_city_with_country(city)
        City.where("lower(name) LIKE ?", "#{city.downcase}")
    end

    def weather
        puts "CITY APIIIIIIIIIIIIIIIIIIIIIIII"
        puts ENV['OPEN_WEATHER_API']
        url = "http://api.openweathermap.org/data/2.5/weather?id=#{self.city_id}&units=imperial&APPID=#{ENV['OPEN_WEATHER_API']}"
        response = HTTParty.get(url)
        weather_data = {}
        weather_data[:weather_detail] = response['weather']
        weather_data[:main] = response['main']
        weather_data
        
    end
end
