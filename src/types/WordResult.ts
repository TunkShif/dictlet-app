export type Example = {
  example: string,
  exampleTranslation: string | null
}

export type Definition = {
  pos: string | null,
  sense: string,
  senseTranslation: string | null,
  examples: Array<Example>
}

export type WordResult = {
  word: string,
  query: string,
  phonetics: string | null
  audioUrl: string | null
  definitions: Array<Definition>
}
