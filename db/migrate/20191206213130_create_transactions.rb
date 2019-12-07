class CreateTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :transactions do |t|
      t.string :asset, null:false
      t.integer :price, null:false
      t.float :amount, null:false
      t.integer :amount_usd, null:false
      t.integer :user_id, null:false

      t.timestamps
    end
  end
end
