foreignKeys: [
  {
    name: 'fk_address',
    columnNames: ['address_id'],
    referencedTableName: 'addresses',
    referencedColumnNames: ['id'],
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  }
]