class CreateIssues < ActiveRecord::Migration[6.0]
  def change
    create_table :issues do |t|
      t.references :project, null: false, foreign_key: true
      t.references :reporter, foreign_key: { to_table: :users }

      t.string :title
      t.integer :issue_type, limit: 1
      t.integer :status, limit: 1
      t.integer :priority
      t.integer :list_position
      t.string :description
      t.integer :estimate
      t.integer :time_spent
      t.integer :time_remaining


      t.timestamps
    end
  end
end
