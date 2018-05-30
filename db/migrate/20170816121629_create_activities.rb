class CreateActivities < ActiveRecord::Migration[5.0]
  def change
    create_table :activities do |t|
      t.string :name
      t.text :pages
      t.text :setting

      t.timestamps
    end
  end
end
