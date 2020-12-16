require_relative 'boot'

require 'rails/all'

Bundler.require(*Rails.groups)

module WorkshopRails
  class Application < Rails::Application
    config.load_defaults 6.0
    config.assets.enabled = false
  end
end
