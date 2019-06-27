class CreateHandwritings < ActiveRecord::Migration[5.2]
  def change
    create_table :handwritings do |t|

      t.timestamps
    end
  end
end
