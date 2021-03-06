import DateTime from '../index'

describe('DateTime', () => {
  it('should define all functions', () => {
    expect(DateTime.formatDate).toBeDefined()
    expect(DateTime.formatHour).toBeDefined()
  })

  describe('formatDate', () => {
    it('should format date to string', () => {
      const date = new Date()

      expect(DateTime.formatDate(date, 'ptBR_short')).toEqual(date)
    })
  })

  describe('formatHour', () => {
    it('should format hour to correct', () => {
      const hour = 18
      const date = new Date()

      expect(DateTime.formatHour(hour, 'ptBR_short')).toEqual(
        date.setHours(hour),
      )
    })
  })
})
