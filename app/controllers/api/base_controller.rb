class Api::BaseController < ApplicationController
  protect_from_forgery with: :null_session

  rescue_from Exception, with: :render_internal_error

  def render_internal_error(ex)
    render status: :internal_server_error, json: { message: ex.message }
  end

  def json_params
    @json_params ||= ActionController::Parameters.new(JSON.parse(request.body.read, symbolize_names: true))
  end
end
