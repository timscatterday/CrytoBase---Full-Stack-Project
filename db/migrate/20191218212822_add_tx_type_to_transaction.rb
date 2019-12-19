class AddTxTypeToTransaction < ActiveRecord::Migration[5.2]
  def change
    add_column :transactions, :tx_type, :string
  end
end
