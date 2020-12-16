class CreateProjects < ActiveRecord::Migration[6.0]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :url
      t.string :description
      t.integer :project_category, limit: 1

      t.timestamps
    end
  end
end
