import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@ioc:Adonis/Lucid/Orm'

export default class Mitarbeiter extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  // Ab hier selbstgeschrieben
  @column()
  public name: string

  @column()
  public schuhgroesse: number

  get isAltay() {
    return this.name === "Altay Akkus"
  }
}
