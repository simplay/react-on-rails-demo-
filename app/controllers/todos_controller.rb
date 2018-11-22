# frozen_string_literal: true

class TodosController < ApplicationController
  def index
    render json: Todo.all, status: 200
  end
end
