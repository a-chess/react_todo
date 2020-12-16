ActiveRecord::Base.transaction do
  FactoryBot.create_list(:book, 10)
end