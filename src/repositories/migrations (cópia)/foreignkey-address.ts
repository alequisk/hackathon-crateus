foreignKeys: [
  {
    name: 'fk_company',
    columnNames: ['company_id'],
    referencedTableName: 'companies',
    referencedColumnNames: ['id'],
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  }
]