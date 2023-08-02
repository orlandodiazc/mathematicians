export type Unit = {
  name: string
  /**
   * The plural form of the standard name of the unit
   */
  plural?: string
  /**
   * A set of other names that the unit is known by
   */
  otherNames?: string[]
  /**
   * The standard symbol of the dimension. Only optional if unit does not have a symbol
   */
  symbol?: string
  /**
   * Other symbols used to signify the unit
   */
  otherSymbols?: string[]
  /**
   * Determines if the symbol should appear before the value. Defaults to false
   */
  symbolFirst?: boolean
  /**
   * An enum describing the type of a unit and how it should be treated. range, fractional, whole may be added later
   */
  type?: "customary" | "si" | "binary"
  /**
   * required needs to be set to true!
   */
  systems?: string[]
  /**
   * A set of unit systems that are not allowed to use this unit. Useful for excluding specific systems classified lower in the system tree
   */
  excludedSystems?: string[]
  /**
   * A set of tags to describe additional properties of a unit
   */
  tags?: ("dry-only" | "fluid-only" | "cooking")[]
  /**
   * A scale factor to multiply by when converting from the base unit to this unit. Default is 1
   */
  multiplier: number
  /**
   * The absolute uncertainty within a conversion between this unit and the base unit.
   */
  uncertainty?: number
  /**
   * A constant offset to add when converting from base unit to this unit
   */
  offset?: number
  /**
   * True if the multiplier and/or offset are estimated or not exact
   */
  estimation?: boolean
  /**
   * True if the unit rarely used within the unit systems it is part of, else false. Defaults to false
   */
  rare?: boolean
  /**
   * A set of the names of acceptable prefixes to apply to this unit
   */
  acceptedPrefixes?: string[]
  /**
   * A set of names of unacceptable prefixes to apply to this unit
   */
  excludedPrefixes?: string[]
  /**
   * The prefix already applied to this unit.
   */
  prefixName?: string
  /**
   * The name of the unit without prefix applied.
   */
  prefixFreeName?: string
  /**
   * Additional notes as required
   */
  notes?: string
}
