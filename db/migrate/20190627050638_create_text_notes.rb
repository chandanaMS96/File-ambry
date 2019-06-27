class CreateTextNotes < ActiveRecord::Migration[5.2]
  def change
    create_table :text_notes do |t|

      t.timestamps
    end
  end
end
