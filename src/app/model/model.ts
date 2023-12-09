export interface CountryDetails {
    name: string
    leagueName: string
}

export interface OverallLeague {
    get: string
    parameters: Parameters
    errors: Errors
    results: number
    paging: Paging
    response: Response[]
}

export interface Parameters {
    name: string
    country: string
    current: string
}

export interface Errors {
    rateLimit: string
}

export interface Paging {
    current: number
    total: number
}

export interface Response {
    league: League
    country: Country
    seasons: Season[]
}

export interface League {
    id: number
    name: string
    type: string
    logo: string
}

export interface Country {
    name: string
    code: string
    flag: string
}

export interface Season {
    year: number
    start: string
    end: string
    current: boolean
    coverage: Coverage
}

export interface Coverage {
    fixtures: Fixtures
    standings: boolean
    players: boolean
    top_scorers: boolean
    top_assists: boolean
    top_cards: boolean
    injuries: boolean
    predictions: boolean
    odds: boolean
}

export interface Fixtures {
    events: boolean
    lineups: boolean
    statistics_fixtures: boolean
    statistics_players: boolean
}

export interface Standings {
    get: string
    parameters: StandingParameters
    results: number
    paging: Paging
    response: StandingResponse[]
}

export interface StandingParameters {
    league: string
    season: string
}

export interface StandingResponse {
    league: StandingLeague
}

export interface StandingLeague {
    id: number
    name: string
    country: string
    logo: string
    flag: string
    season: number
    standings: Standing[][]
}

export interface Standing {
    rank: number
    team: Team
    points: number
    goalsDiff: number
    group: string
    form: string
    status: string
    description?: string
    all: All
    home: HomeAway
    away: HomeAway
    update: string
}

export interface Team {
    id: number
    name: string
    logo: string
}

export interface All {
    played: number
    win: number
    draw: number
    lose: number
    goals: Goals
}

export interface Goals {
    for: number
    against: number
}

export interface HomeAway {
    played: number
    win: number
    draw: number
    lose: number
    goals: Goals
}

export interface OverallFixtures {
    get?: string
    parameters?: FixtureParameters
    results?: number
    paging?: Paging
    response?: FixtureResponse[]
}

export interface FixtureParameters {
    league: string
    season: string
    team: string
}

export interface FixtureResponse {
    fixture: Fixture
    league: League
    teams: Teams
    goals: FixtureScoreGoals
    score: Score
}

export interface Fixture {
    id: number
    referee?: string
    timezone: string
    date: string
    timestamp: number
    periods: Periods
    venue: Venue
    status: Status
}

export interface Periods {
    first?: number
    second?: number
}

export interface Venue {
    id: number
    name: string
    city: string
}

export interface Status {
    long: string
    short: string
    elapsed?: number
}

export interface League {
    id: number
    name: string
    country: string
    logo: string
    flag: string
    season: number
    round: string
}

export interface Teams {
    home: FixtureHomeAway
    away: FixtureHomeAway
}

export interface FixtureHomeAway {
    id: number
    name: string
    logo: string
    winner?: boolean
}

//   export interface FixtureGoals {
//     home?: number
//     away?: number
//   }

export interface Score {
    halftime: FixtureScoreGoals
    fulltime: FixtureScoreGoals
    extratime: FixtureScoreGoals
    penalty: FixtureScoreGoals
}

export interface FixtureScoreGoals {
    home?: number
    away?: number
}