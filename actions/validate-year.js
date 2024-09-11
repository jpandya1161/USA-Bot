  /**
   * A validation function for the year value
   * @title ValidateYear
   * @category Custom
   * @author Jay Pandya
   * @param {string} year - A year value fom user
   */
  const ValidateYear = async year => {
    bp.logger.info('')
    bp.logger.info('--------------------')
    bp.logger.info(year)
    bp.logger.info('--------------------')
    bp.logger.info('')
    const is_valid_value = await is_number(year)
    session.is_valid_year = is_valid_value

    return
  }

  async function is_number(value) {
    if (value === '' || value === null) {
      return false
    }
    return !isNaN(value)
  }

  return ValidateYear(args.year)