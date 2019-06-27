class AddTypeToDoc < ActiveRecord::Migration[5.2]
  def change
    add_column :docs, :type, :string
  end
end
