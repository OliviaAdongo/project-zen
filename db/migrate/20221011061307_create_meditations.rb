class CreateMeditations < ActiveRecord::Migration[7.0]
  def change
    create_table :meditations do |t|
      t.string :imgurl
      t.string :category
      t.string :description

      t.timestamps
    end
  end
end
