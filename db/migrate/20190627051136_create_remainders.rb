class CreateRemainders < ActiveRecord::Migration[5.2]
  def change
    create_table :remainders do |t|
     t.boolean   :status
     t.integer  :priority

     t.timestamps
   end
 end
end
