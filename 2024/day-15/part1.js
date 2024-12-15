const puzzleMap = [
    "##################################################",
    "#.#..OO.OO...O..OO..#.....O....#OO.#....#..OO....#",
    "#O..O......O#...O.....#..OO..O....O...OO##O..O#..#",
    "##.O.O...O.#.O...O#O...O.#O..#..#....#O.O.OOO...##",
    "###...O...O.OO..OO....O.........OO..OO..#..O...#O#",
    "#OOOOO...O.OO.O..OO.O.....O.O...OO..O#......O.O.##",
    "#..#..#..##.OOO.#O..O....................O#.O..#.#",
    "#.....O.O.O.OO..#.#.O...OOO.O.#.........O.#......#",
    "#........#....O..O.OOO.OOO..O...O.O.OOO.O...O.O.O#",
    "#..O..O........O..O#...O.O....#..O......O..O.#O..#",
    "#O....O.O...O.........#...#.....OO....O......OOOO#",
    "#..O.....OOO#O..O.O.#.............O.#OO....OO.O.O#",
    "#...OO.....#....OO......O#..OOO....O.O..#OO......#",
    "#....O#.......O....#.#.O..#.OO#O..O...OO..#O#O..O#",
    "#..O..O.........O..#.OO.#O......OO.OO......O...#.#",
    "#...............#...#.#...O#............O.......O#",
    "#OO...O.OOOO#O.....O........OO.OOO.OO....OO#.#...#",
    "#.O.#O..OO.OO..O..#..#..#..O...OOOO...........O#.#",
    "#...OO......O...O..O...O.O.O#..OOO......O#..O....#",
    "##..OO....OO.....#.O...O..OO.O.O..O##..O....#....#",
    "#......O...O....#OO..#.OO.O.O.O.#.OO...O....OO.#.#",
    "##.....#.OO.O.............#O......OOO#..........O#",
    "#.........O...#OO.....#.....O..#.....OO.O.#O.....#",
    "#.........#O...OO..O...#.OOO......O....O...O.O.#.#",
    "#....O..#...OO.OOO......@..#..O.O..O.O.......#O.O#",
    "#.OO.#O.O..#..O.......OO.....#.O.O...##O.......#.#",
    "#..O....O.O.....#.O.OO..O...#OOO.O...OO.O..#.....#",
    "#.#.O.OO.#...O.....#...O#.O..#O#O.OO............##",
    "#....#.O....O..O...OO...........O.O.OO.O.OO..#.O.#",
    "#O..O.O.O.OOO.O..O...#O.O..OOO.O#O...#.O...OO.O.O#",
    "#OO....#.....O.O..#.#.O.O..........OO.#..O#......#",
    "#..O......O#..O...##O.O..O.O.#...O.OO.O....O..O..#",
    "#.#..O.O.....#O.O...OOOO....O#O.OO#....O......OOO#",
    "##..#...OO###.O..O.OOO.O.O.........#..O..O.O..O..#",
    "##...OOOOO.OOOO#..O##...O.....O.O..OO....OOO#....#",
    "#....O.O..OO..#O..#...O........OOO.O.##.O.#.##..O#",
    "#.....OO..OO..O...#.....O.......#..........O.#.#O#",
    "##..#.....#.O...O#..O.....#.....#..#...OO....O...#",
    "#.OO...O.OO..#O#...#...O.O.##..O..#O#.........O..#",
    "#......O.O..O.OO.#.O.O..O...OOO....#.O.OO.O..O...#",
    "#..#...O...O..OOO..............O.#...O..O....O.###",
    "#........OOO...O..#.....OO...OO....O......#.OOO#O#",
    "#.##.OO..O.....##.OO.OO.#.O.##..#..........OO....#",
    "#..O.O..O.O.#.OOO...#....O..#..#.O.O....#.O..O..##",
    "#O..O..O..O.O.............OOO.O..O..O..O..O.OO##.#",
    "#...O#OO..OO...O.....O..#O.O...O...O.OO...OO.....#",
    "#..O...#..#.O....#.....#.OOO#........O.....#.O...#",
    "#.OO...OOOO.....#O......#.....O..O.O.O.#.........#",
    "#.....O.O#.O..OO......O..O.O.O....##O#..O.#...#..#",
    "##################################################",
]

const puzzleMoves = [
    "vvv>>><v^v<v>^<v>^^v<>v>^>^^>v<v^^^<^<<>v<^vvv<^<v^><><^^<v>^^^^^><<>v<vvv^>^^<^vv<>v^v<^<<^<<v^vvv>>><>v<>vv>^<><^^v^>^>^^^<^^^>^^<<<><v>vv^^<>><v^^<vv>^vv^v^<v^>>>>^v<^><vv<^<<<<>><^^^v^v<>v>^v^<^^>>^^>^<<^v<^<>v<>v<vv><^<^<^><>>><<<>>v>>>>v>v^<><<<><>^<>^<^v>><v^v>v<^^<<>vv^v^<v<<^v<v<^^vvv<^<^v<^<^^>v^>v^>vv<v>>>vv>>^>^v<v<>>><v<<^<>v<>v^^^v<>>v^<><<vv>vv^<^v^^>^vv<>^<^vvv<<<v<>^^><vv<<<>>^><>>>>^^^^^vv>><>^vv<>v><v>v^^^>>v<<><v^v<^<^^vv<<^v>>v^<v<^<<^><>vv<vvv^><><^v^v<^><>>>^^>^>^^<v<<^>>vv<<v^^><^<vv<vv<<vv<<><^^^<v<<^<<^>>>><<<>^<<vv>^<>vv^<<^>^<^<v^v>v^<<><>>v^<>vvv>^^<>^<v^<v>v^><v<^v>^vv<>^<^<>^<^><<<v^><v^>^>^^<^<v^^><<^v^^>>>v<>vv<<v<<<^><vv<>><>>^><vvv^vv>^<^vv>v<^^>^>>^>v^<<<>><^^vv>^^<^^>>^<<v>><>v^><^^v^^v>^<<>>v<v^v^><<><^>^>^<^<>^<<v>vvv^^^<<>>><v^<>^^><^v^>^<v>^>v><>><^>v^><^<><vv^<<<^><<>vv><^^><v<^v>v><<<><<>^><v^<<>^><v>^^v<>v>^^^<><><^v>>v><<^<v>>v^<^<>^^v>v>^>>>v><>^^>^^v>v^^v<v^>>vvvv^v^<^vv^>>^^<v<v><^^^><><v<>>v>v<v^>^vv<>>^^>^vvv>v^^v>>^<^>>^>v^>>v><vvvv^>v",
    "v<^<><v^<v<vv<<v>v^<>^><vv<<<<v^>^>v<^^>v<v>v<>>^>>v<^^^v^^>v^><v>^^>>>^>v>>>v^><><<><v^v^vv^^^^v<<^>>v<^><<v^>v^>^^<v<<><^v<><v^^<vv^^<v^>^>>^v<v^v^<v^v<<^<^>v^<><<v><vvv^<^^^^<><><^^^vv^^>vv^>v<v^^<<^^<<<<<>^v^vv^vv^>>>vv<^<vv<^v<><^^>>v<<<<^^<v>>>v^><>^>>vv>>v<<><v>>v>>><<v^<v>>^<>v><^<<^<<<<v^^^vv<^>v<v<^><><<>^v^vv><v>^vv><<^v^v>vv^v<v>>v>^>v>>><<><><><v^<v>^<>^<>^v^v<>vv>>^<>><>^v^v<<^>v<<v<^>><>>^^v>v^vv><vv>^^>^v^>v>><<v><vvvv><>>>^<^v>v<<>>v^<<v>^<><v^v<><^^v<>^vv>^>v<^vvv<><>>vv>^^<v>^v<<v^^^<><>>>^<<>vv<><v><<>v<v>v>>^v>>v<vvv><<^>^^<^<>>>>v<^v^^^<<<<<^>^>>>^<^<^><vv<>^>^^v^><v^>>^<<^>^<v^^vv>v<>v><v^><>>>vvv><>v<vv^>>v<<><^<>>v>>><vv<>v>><vvvvv^><<<^><>>^^><v^<^^^v<^<^>^<v^<v^^^><^<v>v>^<<^<>^>v^<v>vvvv>v>>>v^vvvv>><>^>>><>vvv^<^<v>^^^>>^vv>>^v>>^>^^>^>>vv^^>><^<>>^^^^<^v><>^>^v>>><^vvv^vvvv<>^><^vv>>^^v<>^<<^v<^^<v>>v^<v>^><^><vv<<^<<<v^vv<<>v<v^^<><>^^>^v<<^<><v^v^><v>^><<v>^vv>^v^^v^><<vv>v><vvv><>^<>v>v>^<<^<<>vvv>>>><<>vv<^<><>^<^v><^<vvv^<>^^>>vv>v<>v>^^^vv<><<^>v<v^v",
    "<>^<^^v<vv>^>>^<^>^<v^vv<v<<v<^>>v^^v>^^v>v<<<<^<<v^<v>>v>v^v<^^<><<^v>^^^<v^^><v>vv<^^^<>>^<><^v><>><><^>^<<<v<<v>v<<v^vv^v<v>^^>v<v>><>v<v<<^>v>^<<v><<>^^^>^v<vvv<^<>><<>>v<^<>^v<>v>v>v<<<><^<^<>^<^<v>^<v>>>^<v>>>v<^v<^^^^>^<v>^><^><<><v>^>vv^>^v<<>>>v^v<>^<v<><><><<><<>^>v<>><<>^v<^<<<^v^>v^^^^>>><<^v>>>^><^v^^<<^^v><>>v^^^>>v<>^>vv<vvv^>>>>v<v<v^<^<>>^v<vv>^>^v^vvv<<^^><v<^v^v<vv^v>><^^<^>vv<v^^v><>>v^>>v<<>v^^<<^>>><<><><<<>^v>><<vvv<v^v<^<>>>>><^<<^<^><v>v>v^>v^v><v>v<^<^>v>><>v^<<v<<><^>v<^>v<^<v^v<>v^v^v>vvv<<><<>><^>vv^<^^^^<>>^v>>v^v>>v<v<<<v<><v^<>>v>>^><^>^^><^^v<<<><^>^v^>><><^>v><<v^>>><>^^v<>^<^v>v><<><>^<><<<^v>^^><>>^>><^v^v>>^><>v>v<^>><<><v>v^>^>v^vv>vv<^v^^v><<vv>v>vvv>^><v>v<>v>^^^v^>>^>>v^^>^>vv>v><^<>><^v>v>>>^<v<^vvv<vv>^>>^<^>^<<>>v<<^^<v><<^<^<<vv>^<>>^<>v<>>^v>vv<>^v<v>^>>v>^v^>^^<><><vv<>^v<^><<vvv^<><><<>^<<^>>>vvvv^v^v^<^<v<vvv<v>^vv<<>v><>^><>^v>v>>v>^v>v>^^^v<v<^vv<><><vvvv>^><^v><>>>v^<^v^>^>>>>><><<<>vv><v^>^v^>v<>>>v^>vvv<>v^v<v<^><v<<v^vv^^><v^<v^<^v",
    ">>>v<v^<<><^>>v^<>v<<^>>>^>><<<<>><v>><v<>>>v<>><vv^<>vvv>v<v>v^^<<^>^<<^>^v^^^<<>v>^<><^^<vv<>v<^>^<^^>^^^vv>>^<v<v>v^vv>^><v<^^v^v><<<^^v<v<v^><v^v>>v>^>v>vv>>>^^vv>^vv<^>^><v^v<>vv^<v^<<<><>vv>>vv>v>v^>>^vv^>v^<^>^><<>v>>><<>><v>^>>>^<<vvv>>^v<<<><>v^v^<vvv>vv<>^<<>^v><vv><v^>v>v^>^<<v<^<^<<v<<^^^<^v<vvv>^>v<<<v>vvv>^><<^<v<v>^>vv^<>v>^^^^<><^>^<<<<v<<^vv<<^v<>v<<<v^<^vv^><<vv<>vv^v>v><<>vv^><v>^vv<^v<^><^^v^^^^vvv<>><^<<<>>v>^^>^<^^^><<>><<^^^^vv^<<><<<v>^v^^v>vv><>v<>^<><^<<><><>^<v>v<>^vv^^<><<^<<<v<<<<>v><><>v<>>^v^^<^<><vv<>>><v<^v<^v<v^v<^^^^^<vv<<v^<<^<<vv<<vvv><^v^^<>^v<^<><><<v>v^^^v^>^<<v>>v>v^vvv^>>^>^<>>vvv><v<v><^^><v^<<v^^<<>v><<<v^<><^><^v^<<^<v<<<<v^<^^v^<>v>v><<v>^v<>>v<v^v^v^>^<v^^^>><^^^^v^<^^<<^<>^<v^><vvv><v<><><^^^v>v>><^<v<<>^^vv<vvv>>>>v<vv^<v>vv^^><<>^vv<^^<^<v>>vvvvv^v^>>vv<v>v<v<^v<>v^^<v^vv<v^>^^<<v^<<><^<<>v>v>^^<v>^^>v<>v<vvv<>v>v<v^>^<vv^<>>v^v<<^^v^>^<vv^v<<^vvv^^<>^v<><v<^<vv<>vvvv<v<^v>^>>><<v^v^<<^vv^v>^>vv^^>>>^>^<^>^v^^<><>^<<v<<^v<^<^v^<^^vv^^vv",
    ">>v<^><<v^>>^<<^^v>^<<^<<v<vvvv<<^^<^v>^^<<<vv><v>^<^^^^v>v>^<^><^^<>^vv<v<>>v><^<vv>v<>^^^><>vvv<>vv>>vvv^>^><<<<<>^>v^>v^^<^<^><><<^<<><<^<>v>^>>v<^<^^<<^^<>>>>^v><><v^^^v^v>>>vv>v<^^v<^^>>>>^^^^<>^v>^^<^^>^^vvvv^v>v<<^v>^v<>^>^^v>^><>v>vv>^v>^^v^><<<^^>^v^v^v^v>^>^>v<^<^>>v^<<><v><^^^^>^>>>v<<v^^^<><^v<>v^>>>><^v<>>v><vv^>>>vv^<>>v>vv>^>^v>>^><>v<v<>v<^>>v<>^>^<<^v^>v<>><^^<^vv><^v<<<v^v^<^^^^v<^><<vv<<>^vvv<^v^v^^>^>^v^^v>^<><<vvv>v>^^^^><v<<vv>v^<v<^^vv<<v<^<<<<<^v<vv<v>^<<>>vv^v^><^^^^<v<v>^^^v^v^^vv<v^v^<^>>^^<<<^v>vvvvv<><<>^<v^<^v>vv^v^<v<v^>^^<v>>>>>v^<<>^><v<^^><<v^><>^^>>v>v^<>v^^>>>>><>v^v>^^v<<^<<<<><v^<<vv^>>v<<^<<v<v^>>^^<><v>v>>^vv<<<v<v><v^vvvv>vv^<v<<^vvv^^^^v>^<^>^<<><v<<^>>^><>^v<v>^<v><><<v<<<^<v^>^^v^v><v<<><v<vv^^<v<<^^>^<<^<vv<>v>^>^<<<^^^^>^<^^vv<<v<<vv>>>>v><<>>><vv><<>>>v><<v>^>><>v<v>v^^^<>^><^v><>v<><>v>>^^<<<>><^^<><^><>>v>vv^<v^>>>v<<<>v<^^<^^<v^><><>v^<v>^^>>v^>^>vv>^^^<vv>^v<<<v<^^^>v<^<<^^v^vv>^>^v<^v>^<vv>v^v^^^v<^v>^>v<<vv^<<^^^vv<<^>vv^<v^vv><<<v>>",
    "<^>v^>>><<^v<^>>v^v>vv<^v^>>>^>^>v<>v>v<^^><<>^>^v<><^^v^>^>><^>^>v^<>^><<>>>^>>v><><<^^v<<^^>^>^v>vvv>>>vv>v<^^v^^v<vv<^>^<vv><v<vv^^<<><^<>v^vv>>^^vvv^<vv^<<><<<v^^<>v^^v<^<v^>>>^>^^v^^^^^<<vv><^<<v^v<v>>v>v<><^<<v<>>^>v><v>v<>vv<>vv<<^<v><>^^<>v><v<^>^^>^^vv<v^^<<<>>^^v<>^^>^vv<>v<>^v^v^v<>v<>^v^^^v<^<><v^v^>>^v<<<^>v>^^^v<>v<v^><^v>v<<>v^vv<>>><^<v^>v^<v^^v>^v^<<^<v><v^<^^>^>v<^>><>^^^vv<>^v<v^<^^<<>vv^><v>v<v<vv^v>>v<><<>^>^^>^<>v>>^^>v>>><<<^v^v<^^^v>>v>v<<>>^>><v^v<>^v<>v<><<<^>>v>vv^<v>^>><^v^><><>v>>^v>^>^<<v^v>v<vv^vvv^<^>v<^>^<v<vvv<^^<<<><v^><<>^>v^vv^^^v<vv<v^<>v^<^^<<><<v<<v^>^><>^<>>>^v<vvv<v<<<>vv<v>^>>v>>v>>^<v^vv<^^^<>>v<^^^vv<^>v<<><<<v^<^^^^<^>v<<>>>^<^vv>>>><>^<<<v<>v^<>^><v<<>>^>^^^<^vv<<<v<v^^>v>>v>^^>^<<<^<>^>><v^v<^<^>>^vv^<^^vv<v<vvv<^^^>^vv>>>^^v<v<^<<<^vv<><^><>><<<^<<>^<<>v<<^v><>^^^<<>v><^>^><><^^^<^vv<^>^<<^>>>>^^^<>v<v<v>><><>>^^vvv><^v<>^<v^^<^v<v<vvv^<<vv<<v<^v^v<v>^^vv>>>v<<<>vv<vv<v^>>^vv^v^><^<^<^<v><v><^<v<<v^^>><><<v><^><vv^^<<v><vv<><<^vvvv<v^vv>",
    "><<<<>^>>>^><><<vv^<<<vv<v^<v<<><<^<v<^>>^><>^><<>><>^<v<><^<^^^^vv^>v^><>v^^<vv>>v<^<v^^^^^^>v>^>v<v>><><^vv>v>>>>v^v^^v<^^<v>v>>v^v><<>v>v^^><^<v<<><><<^>>^vv><<^v^vv^vv<<^vv>vv<^^v<^^vv<v^<<>v<>v^<^^v^<vvvv^v><vvv<vv^><vv<v>v>v<>^>>><v>v>>vv^^>vv<>>^<>^>^><v<>>>>><>>v><<>>^<<>vv^<>^^>><<^^^<><^<v<v>^<<<>v<v^v>v>^>vv>>^^vv^>><>><>v^v>><^^<>>^^>^^>^^^^vvv^>v>^>v><>>vv^><^^v<>v<v<vv><>>^^>>vv^^^v^^v^^<>v<^<v<v^^vv<vv^><^>v>>^<<^^><^<^vv<^><^^>^<^><v<^^^>>><^^<^^v<v>^>^vvv<<vv>^<^<>^v<<>^^v<^^^<><>>v^v^><>>vv^^^^^^<<^^^v^^^v><>v<vv>vv<^^^^<^v<v>^^^><v^<^v^v>^>><vv><v>vv>>^<>^^><<>>>^v<>>v^><^<^><^^><<v<v^>v<<<^^<v>>>vv<v^v^^^^^^^>>^^><^v^<vv<<<>^^v>v>v<vv^^<v^^^>^^^v<v>v^^>^v><>^>v>v^^v<><<>>>v>^^<v^>>vv^<^^^^<^^<>^^<^v>^><>v<>^^^<vv><<vvv^^<<^v>>vv<>vv<v^^>>^<v>><^<v>>^v^^<<v<>>^^>><v^^>vvv^v<^v<^^^v^^>v^><v^vv<>vvv<<^v>v<^>v><vvvv<^v>v<>>>^<><>^^^>^<<vv>^v>v<<<^<^>>v<<vv^>>^^<<>^^^>>>v>>^<^^^<<>v>vv<^v><<v>>v^^<<^<vv<<><^<<^^>^v><><>v^v>>^^>vv<v<vv<v<v>v<>vv>v^><^v<^>^^^><><<>^^v<v<v^",
    "><^<<v^><<<<<<^>>^^<^^<^^^>^vvv>^<>^vv<><^vvv><vv^v<<v>>v^v>v>>v^vv^^^^^vv<><v>v<>v^vv>><^v^>^<>v<><v<<v^v<<^v<<<^<^vv>>>><^><^>>^>^<vvvv><<>>v<^<v>>^<>vv<>vvv^>>v^^>vvv<vvv^>>><v^<>^<><>v^v<^<v><>^^<^^vv<<>>^><>v<<>^<<>^^>>^>><^<v^>^<<>v^><vv^v<^^>^<>^>>^v^<<>>^<<<<^>><<^^^<^^<v^>v^^vv><<^^<>v<<v<^<^><^>><>v^>^v<^v>>>^>vvv<v^>vv^<><<>>v<^v>v<><v>>><<<^^<^<v^<v<<><vv<><v<^<vv>v^>^v^^<^^<>^<v<<<v^vv^^>v>^>^v<>^>v^<^^<>^^>vv^v^v<^v<v<<^>^>v<<>v^>v>><^v<>^<>><<^^v><>^^>>v^v><<<vv<^^<>v>^>>^^vv>^^>>v<<v<vvvv^^><v>^>>v>v^^^v><<v^vv><>><^<>^<>>v^v<^^v<vv<<^<<>v<>v>vv<>^>vv^>^v<<v<vv^<><>>^vv<^<v>>v<vv^^^^vv^^<^>>>>><^^<<^<<v>v>vv>><^v^v<^<vv>><>^^>v><^><^>>v^^>^^>>^^<v<<v>>v<<<><>>v^>vv>><<^<^v<^v<^<v<<>vv>v<<><v<^^^>^^<<v<v^>>><^v^>^>v<<>>>>^>>><v^^>v^>><>><v>>vv<>^>vv>v>>>^<v<^vv^><vv<^^vv^><>^<v><^>v<>><<v<<v^<v>v><^>v>>><<v^^<<^>>>^vv^>><^>>vv^v>^>^v>^<^v^>^<>v^>><<v<>^v^^><vvv>^><>>>^v<^<>v<>^<<><^>^>^v<^<v>v>>^<^^^v<<<^^<^v>^>^>^>^>^v^<^>^>^<v^><>^<v<^><>>v>^>v<<><<<v<^v>^<<^v<<<<^<<><",
    "^<>^v^<^<><>^>><v<^<>^><<<>^v>v^^v><<>>^^^^v^^^>^^v>v^v^^>><<^<^v>^<>>^><v^>vv^vv^^v<vv<^>v>v<v>^>v>>v<>><v^>>v><^^<>^^<^^v<^>vvv^>^<>^^v>>^v>>>>v>vv<^^^^<>vv^><>^^vv<^<^>^<>^v>^vv><^^<^v><<>v^^v<vvvv<>v>>v<^^>^<<>^<>>><<>v>^><<^>^^v^<v<vv<><v><>>^<^v><v<>>><^>vvvvv^^v^>^^^>v<<<><<^^^<v>^<vv>>>^<<^<<<^<vv><^>^^><<<v<>v^^>vvv^v^^vv^>>><v<^vvvv>^<<<<>><v>v<v^<<^<^<<^^<^vv>^>>>^v^^>v^^vv>^^<^v^<v>^<vv>v^>^>><<v>^vvv>v<v<<>^<v>>><>^^<v^>^>^v>v<^>>^^>^>v^vv^>^<>^<^v^<^<v<v<>>><<><><>v^<>v^v^v><^^v^v^<vvv>^<>>v^<><<v^v^^v>v^^<><v^>v>^><^v<<<v<^v>v<^<>v><<><>v^<<v^<^v^v<<^><^<>v<v><^<^<vv^>^^>^vv^<^^<><v><^>^v>^><^v<>v<<<<<<^<<^v<^^><^<^<<>><<>^<v<<<<^>vvv>v^v<<>v<^<>><<><<^^<<v<><<vvv^<^^v>vv<v<vv<vv^<<><vv<<<><vvv>>v^^<vvv<v>vv^><><^>^>^<<v^vv>^>>vv^<v>><^<>>>^>^v^v^^^<^v<^^v^<^><v<v^^>v>>^^>vv>><^<>v><vv^^^^^^^><v^vv>v^v><^v<><v<<v>v<^^>vv<v<v>v^^^^^<>vv^v^<^>>v^^^vvv^>>v^<v<<<>v<>v<<^>>>v>v^v><>>^v^^^v<>>^><>><>vv<>^>>>v<>><>^<<>v<v<v^vv>v^^<><>v><<^<^vv<^v^>^><v^^^<>v<>^^>><<>><v>^v>vv^v",
    "><v^v<v<^>>vvv<><>><^^vv>vv>><>><><>><>^vvv>>>><v>^^>^^^v>>><^<<v^v>><^^><^v<><v<^<<<>><<v<^v^v<^<v^<vv<^^^^^v<<vv><^>^>v>>>^<v^<<^<<^^^>>^v<>><^vv>v^^>v>^^<v^^><>v>>^v^><>>^>v<<>>^vv><v<^^v<<v<v><v^<><^>>v^v>^<<>>^v^^vv>>^<<<v>^>>vv><vv>>^>^^v^vvvvv>>>vv><>^<<v^^v^<>v^v>>^<v<<v>v<^>vv^>^>v>><^v^v>>^<v><>v>^><^<^<v^v>^^v^<><^<<<^v^^<><v<v<vv^v>v^^<^<v<v<^<><^v<<<>v^>v^<<>vv>>v^><^<^^vv^<^<<v^v<<^>^<^<^>v^^<v<><>><^^v>^<<<^v<>vvv^>vv>>>>v^vvvv^^<^^^v^<<v<v<><<v<vv^<v<v<>v<v<v^^v^vv><<^<<>>v<>^<>vv>^^vvv^>>>v>>>v^v>vvv<>v<<^^v><<<><<>>v>vv<<v<^^vvv<<<v^v<vv<vv>>vvv>>^v<>>^vvv><v^<>^<v><<^<v<>v<<v<^>>v<>v^^^<>vv^>><^><^>v<^^<>^>v>>>><vv^<>^^^v<^^<^<>v<v>v<v^<v<^v<^v<><><v<><<><>^>>>>^>v<^^vv^><v<v^>^<^^>>>^<v^^vv<<<^^>^^^>>^<^<>^v<<><vv^<^^^^v^<v<><^<v<vv<>^v><<^<<^v><>><^<>v><^<>^<^v^<>^^>^v^^^^>^<<vvv<^<<v>^^<^>^<<>v<<v<v>>>>^>v>><v<v<>^<<^v><<>v^^v^>v^^<^v^^><v<<v<vv^<v^<<<^v>>^<vv>>v^v^v^^<^v>><><><>v>>vvv>^<<><^>vv<^v>^<>><><<^>^>><<<<^^^vv><v<>v>>^<vvv>>^v><>^^^v>v><<>v<v>v>^v^^v>^v",
    ">v<^^>>^^<v<><><<>^<>>>v^^^<><^v<v^v>><>>^<^<><v^^vv^<<<>>><>>vv^>^vv^<^vv><v^>><^^v^vvvv^v<^v^^<^>>v^<vvv><>^v<v^<<<>v<<<>^v<v>v^>^^v>><<>^v^<vv>><<<vv^v>^^v<<^<<^<>^vvvv<>v^>^>vv<v>^vvv<<^><<^><<v^^^v^<>><^>>><^^><v>^v^v<^<>v^^<^vv<^^>vvv<v<^^v^<>v<>v<<^>>>><v^vvv>^>v<<<v<<>v>>v<^<<>^v<v^<vv<^v><v>>^>>><v>><<<>>^<<<>vv<<<>^>><>^<^>><<>^<vv>^><>>v<^<^<>^><<>^v^<^vv<<>v^>>>^>>^>^v>^<^>v>>^^v>v>>>^v^^^><^<^v^>vvv>v<v^<vvv><<^>^>><<>^^^>v>^<>v<><v<v<^<^^v>><vv>v^^v^>>^v<^^vv><><v^<v<<^v>vv><<><<<v^<v<^><v<^vv>v^>vv^<v^<^<vv^^<v^><^>^^><<v><<^^<>v^<<v^>v^<^><v^v>>><>v><v>>>v><<vv^v>v^>^<>^<vv<>vv>v>v><v^>>^>v^<vv^<>^><<>>>>>><vvv><><v<^>><<<^<^^<<v^><>^vv^>>vv>vv<>>><<^^<><<^<^>vv<><^>vv^^v>v^^v^^v<^^<v<vv^<v>v^^>><<^<v><<<>><<>v<>>^>>>^^^>v<<>v><>><^>>v>vvv>v<>><>>v>^<><>>v^>><>>vv<^>^>>>^>^><vv^<^>v<^vvv><><v<<<>>^<<^>^^^^vv><^><^>><>^<^<>><>^^v^^<v>>>>^vv^vv>^<^vv<<v><>>^<<>^^^v<><<^^>>v>vvv><^>>^^<<>>v<>v^<^>>><v<v^^<<><><>^v><<<>v^vv<>^<v^><v>^><^^>^^<>^>^<^^v><^v<v<<>^<<^>^^v<<<v<<v",
    "v<<<>v^<<v><v^v^^<vv<v>^v<<^<^v><^v<>^^v><v^^>^<vv<^v<v>>>>^v<<vv><>><^^vv^><<<^<<^v>v><><>vv>^<^vvv<^v>^<v<v<<<>>><>>^vvv<v^^<>v^<>v^><<<>><<<<^^><<v^vv^v^v<vv^^v<><<v<<^^<v^^><><^v^>>vv>vv>v^^^vv<>>v<vv>v<>><<^^^<vv^>v^><v<<v<<vv^<<>>>vv<><^^>^>vv^^><vvv^<><^<>>^><v<<<^>v^<><^^>vv<<vv<vv<^^^vvv^>><><<v>^vv>v<<^>vv^^>^v>v>v>v>v<>>vv<<>>^><<v>><<>^<vv^<>vvv<>^v>^^v<^v<v><<v^<^>v>^^v<<>^v<>>vv<^^^<^<><<v^<^>vv^^v^>>vv>^^>vv>^>vv^>^^v^>v<<^>vv>v>^<^<v><<v>>>v><^<<^^<>^v^><^<<v<v<vv^v^^^>v^v<<<v<v>^^<><^>^>>>v<v<^<><<v>^v^><<^<v>^<v>^v^<<^><v>v^<>^vv><vv^^^<^><<<vvv<>v>v<<><v>^vv<v<^<>>>^^v^^v<<^v>v>>^>^<v^>vv^v>v>^<>>v><v>>>><^v<v^>v<<vv^<v>>><>^<<>><<<>><>>>^^>^<vv>>v<>v^v^^<<><^^><v^vv>v<vvv^<v^>^v>v>v>^>^v><^<v<><>>v<^>^>>>v^>v><v^<>v>^><v<^^>^<^>>>>^^^^<>^<>>^v^<>v<v^v<<^v^^^v<v<><^^><<^^vv<>^vv<vv<>><><^<^^><^><v<<^>>><>^^>v<<<>^vv<>^>v>>^^><v>^<^>>v<<<vv><v^<^^<<><^<>^v^<vv^<<^^<^v^>^<^^^<^><>><>>^<>^<^vv<^vv^^>v><^>v><^>><^<^v><v<<^^^^v<vv<^>^v><<^<>>^<vv<vvv^v^vv^<vv>>>v<<<>v<^v>",
    "^^<<v<^>^v^>>v>v>><v<>^><>vv>v<<^^^<>^><vv^v>>v><<^>^<<^^>vvv<v>^>v>^^vv<^v<v<v^<<<<vvv>v^^<<^><v><^v><vv^vv<^^^>>>v^^vv^><<>>v^<vvv<<<^^>^<>>>^<>^<><>><<><^v^vv^^><^^<>>^<vvv<^^>>vv^>^^<vvv^<^><^^^vv>>>>v^<^<^<>^<^>>^v^^>v^^^v<>><^>^<>^>v^v>vvv^>^<^^>v>^>>v^<^<<>v>vv<v^^>v<^^vvv<>vv^^v^<<>^v>>^<^<v<>^^><>^^v><>v^^^<^>vv<<>vvvv^^><><v>^<>^>>^<v^v<>^>^v>>^^v<><>v^<<><<<v<vv^<>v>>^v><>>v^v<^v<^v<v<>vv^v<^vvvv<^><^v^<>^>^^>v><^^^vv><<^^>v^<^>><>v>v>v^^vv<^<^^<^<v<v<<vvvv^<><<<<<^<>^><>^^><^^v^v>v^><^v^>^<^><^vv><>^vv<><^^^^v^>^><><><><><^v^v<<<>^<<^v>><<<>>>^^<<vv^v><v^<<^>v^v>^<^^<<>vvv<>><<>v><<^><vv<^><v>^>>>^^<>v>v>^>><^>v>v<^<>v<v<><vvv^v>><^^^<>v<>^vv><v><<v^vv<^<v<v^<<vv<^v^v<<^v<v>v<>^^v>v>^^<<<^<><v><vvvvv<>vv>><v<v^<>^>^^>><>^^^<^>^<>^>^<<>v>v>^^vvv^<>v<^><^^^>v<<^>>^^<<^^<v><vv<v>vvvv>v<<<<>v>^^^^<<<v^>v^^>><^><^^>^v^>v<<^<v^><><>>^^^^>^^^^v^^<<^^><<><v<<v<v^v^><><^<^^<>^<v<^<^^^v<>>^><v^vv>><^v<<<>^>^vv^>v>><^v>^<>^^^^<v<>v>>^<vv<^>v<v>v<>>><>^<<<<<<^v<>^>><^^>><v^>>><<v<^^><<",
    "^^v>>v^<^<vv^^^><^>v^>><<<<>^^^vv<>v<^v^v<<<v>>>vv^<^vv<^v^^<<v>^^<^v^><>v<>^^vv><^<^v>>vvv<^>v>^><<v>^<>^^>v>>>>^>v^v<v<>>v^v<v^^<<><><>v<>v<^^<<^v>v^<v><vvvv>>v<^v^v<<v^<<><<><^><^vv^v<>>v^>v^^v><^v^>^<<v>^>>vv<vv^<><^^^v^>^^^v^^^<<v<>v>^>^<>^v^><^v^>^^<<>^v<v<^v^v^>>><vvv<^v^>^^^v^<<^^v>^v^^^>>v^<v^vv><>v<v^>^v<<<<v^<^<v>vv>><^^v^v<<^^v<vv><>>v<^<>vv>>^<<v<v^><v^^v>>>^>^>v^>vvv>^^<^>>^<^v<<><v^<v^>^>^^vvvv>^v^<vv>>v>v<^v^<^<^vvv^<>v>^vvvv>>^>^<>v<<<^^^<^>v>^^<^>>v<v<<v<^>^><v<v^<^^v<v<^^<>vv>v<<<vv^vv<^><<><<^^v<^<>>v<<^^<<<><v>v>><^<>>^>>v^><vv<v<>v^v^>^<^vv<^<^>v^^>^^vv<>^vvv>><<^v>>>>vvvvv^^>>^^><vv>>>v^v<><^<>v<vv>^>vvv<<<<>>>^<<>vvvv<v<^<vv^>vv<>vv<v>>v^>^^>^v<>>>><>^v<v<>^<v<^^<>><><<vv<<<<^><<>><v^vv<<v<v><<<v^<<^^>^^^<<<>v^v><v<<<>vv<v>^<v<v<<v>><^<^vv>>^^<vv^^<>v<^^<>>vv<>^^^v>v^<<<><vv>v>vv<<^<<^<><v<^v^><>vv^<<^>^^^<^^<v^^>v><>^<<v^<^<<<<<<v><^>>v<<v>>^^^>>^<<v<vvvv^<v<v>v>v>vv<<v<<v^v>vv>v><><^^^v<^^>^vv<<v^<^<vvv<^<>v>^v>>vvv><>>>v<<>>>>^^<vv^>>>^v^>>v^^>><<^^v^>^<><^<v",
    "v<>^v^<^>^>v<v>v>>>v^<v>>>v><vvv^><^>^vv^>>v<^<v><v^>>>>v^v^>^^^<>^>^^vvv>v<<^vv>^<>vv<<><><^>>^^^<^^^v<^>^v^^^^>v<><<<>>>vv^^<v>^<^^^>vv<<vv<><>v^<><v^>^<v<>^<<<^<v^^v<<^<vv<><v>v^<<><^^vv<<<<<^<>^>>v<<<vv^<^^v>v^<<v<^v>><^^^>^<^^<<v>><^^vv^^v>^>>>vvvv>vv^^^<>^^v>>vvvvv>><><v<>^v^>vvv>^><^><^^v>v>v<<v>v^<<^v<v<<>>v>><v>^v^<<^vvv^<><>v^><v^<v>^>^vvv^v^^^vv^>^<<<v<v^^^>><^^^<^><<><^>^^v<v<vvv^^v^v>^><v>>><>^^v<<vv><v>>>>>>v>>>^<><v<>v>^vv<vv><^^v>vv>>^><<^^v>^>vv<>v^^<^>>v><<>>^<><><>v>^<v<>>v>>v<<^v>>>><v<>>>v><<><v><^<<><><v^^v^>^v>^>^^v^>v<v>^^>^><^vv^<v<><<v>^<<^^>>^><^^<<v^<^^^<>>>v^^v^^v<vvv<<<^^v^>^>>^<<^^vv<<^<v<<^^v>v<v<<^<<vv>>>vv><^vvv<>^>><>>><>v<vv>>v>><>vvv<^><vvv<v<>^v^>^^vv>^<<<^^vv>v<v<v^<^v^<^v>v^>vv><v^<^^><^^<>^v^<^<><<^>>v>vv<<^^^v^^v>v^v<>^v>>>>>^^^><v^^^^^^vv^vv<<>^<<<<<>^^<v<^v<>^vvv^>v^<<>^<>^v^>^<v^^v<^v<<^<>v><vv<<>>v>>v<vv>><v^v^<><<vv<>>>>>v^>^<<>>><^v^>>>v><>v^>^>^^^>vv><v<v^^v^<><><^v>>^^<vv<<>><>>vv<<>v<>v^^>^<v^<<v<<^^^v>>^^^<><^v<<^><^>><>^v^<<>^<<><vv^",
    "vv<<^v<>vv^>v^<<<v<v<><<^vv^>v>^<<<>>>vv^><<<v^^^vv><^^><^^<^<v>>>>v<^v<>^<>v^v^vv<^vv^^^<<v<<^v^^^>vv>>v<^>v>^v^>v^^v^^v><><^<<^^^>vv>^<v>^v<vvv^v>v^^<vv<^v>>v^v<>v>vvv^v<>><^<^^<>vv<>>^^<^^^^<>>^>vv>^vv>vv<v^v^v>v>>^>^v^>v<^^<<^>><<<v<v^<^^v><<vv<>^>^<v^^<v<^<>v^v<^>>vv>^>^vv^^vv^<^v<v><v^^<^<>^<>v>>>^v><v><v<v<^<^>^<vv^><^^>>>>>vv^>v^<>><v<>><><^^>>^>^^v^<>><>vvvvv<^><>^vv>>^>>v^v^^<^<v>>^vvv><<<^<<>v>>v<<<<<^>v^^^v<>^v<v>>><v<<^vv<^>>>>>^>>^^^<^<<<v<<^>>vvv>v<v>^^^^><^^^v>vv<v^v^^<v>^^<>^>v<>v<><^v>^^<^<<^^>>>vvv^>v^<v^^<<v^v>^v>><v^<>^v<^^>^<>^<>^v<<>^^v>^v^^v^v>^>>vvv^>><v<^>^^><><^^>>^<^<^vv>>vv><^<<vvvv^^^vv^>><v^^v<^>^v<>v><vvvv^<^^<<>v>><v>><<<v<v>>^>v<>>v^<<<^v<v>v<^v>>>v>v>>>v^v>^^v>^^v^<<<<<>v^<v>>^>vv><^>v<^>>>>>^>v>><vvv<v>>>>v<v^^<^^^><v<v^^v<v^v<^<>^>^^>>v>^^v>>>^<v<<>^<>><v>^<^v<><>^v<^<><<<^v^v^^<<^<>>>><>>^<^v<><vv>>>^>vv>^^^v^>>v>><<<>^vvv^v^v>vv<<<^<<^>><>^v>>^v>^>vv^^v><^^vv^^<>>^v>^^<<^v<v^<><v<><^><<v>><<v<v<^<<<<v^<<v>>v>^<^^<^><^^vv^<<<><>v>>^v^<>^>vvv>>vv<<v",
    "><v<vv>>><<<^v^>>v>vv><><^><v^^>v^<<<vvv^<>^v^^^^<^<>vvv^<vv>^^>^^v^v^>^>^v<v<>><<>^v^^v><v<><vv<v^>v>>>v^^>^<>v>v>^vv<<>vvvv^v>^<>^<^^vvvvv>>>v>^^^<>>v<^>vvv<<v><v>^v^vvv<>v<>^v^v>v^^<v^v^v^<^v>vvv^vv^^^<>>^^<^>vvvvv<<^^v>^>v<^^vv^>>>^v^^<v^<>^>>>>>^<vv<<<><v><v>>^v>^vv^<<<<>v>vv<<^<^>>>vv><v^<v^v<<<^>v>^<<><v^vvv><<^vv>^^>>>v>><^^><v<v>v>v>^>v^>>v^v>^<><<^<<<>>^>v<^<v<<^><<v<v>><vv^<>>vv><^>^v<v^<<>>v<vv>^><<^<>v><^<>^<<^^<<<^v^>^^><vv^^^>^><^^^^<vv>v^^v><<v>>vv^>><v^v^^>v^<v^^>^^>^^^^<<^>^vvv<^>v^^>>>>><<>v>v^v><^>><v<vvv^<^>^^^>v^<<^<^^<>><^^v<><<<>^><<>v^<<^^>^v>v<<<<<>><^^^^>v>><^v>v>>^>^v^v>^vv>^vv<<<^><v<^v>^v<^<><^><^>^><<vv>>>^^^^vv><<v><^^v<v^v^>^<>v>^^^<v<v>><^^^>v^^<>><^<<>>^>>v>^v>>vv^^v>v<v><v^^>><vv>^^<<^vvv^v<^vvv><v><v<><<><<<^<v^^<v<^>vvv>v<<<<^>>^^<vv<>>^v^vv<^v><<>><vv^^><vv>vv><v^v^vvv>^v^v>><vv^<>v^vv>v><v>^^v<^^^<^<vv^vv<vv>v<>v<>v^><vv^^vv>^v>v<^^>>>v><>><^^>^^><^^<>>><^v^>v<vv><<v<<^v<^v><^^^>^v<>v>^v^><vvvv^v<>>><<<v>vv^^<^v>>^<<>v>>>>^>v<^<^^^vvvv>^<<<<^>^<>",
    "v<^vvv>vv<^v<v^^v<vvv>^^>^<v<^vv><>v<>vv^>^^><^^<<<^<>v><v<>><^<>^v^<><><<<><<v<<>vv><<<vv^vv^>><v^<^<^>><v><<<v<<v^<^<vv<<v^^v^vv>^v<^^v<<^>>^<>^<<^>v>>v^>><<^>vv^v<vvv>v^<^^^^<<^^^>><>v^^v><vv^^v<^>^v^v>v^^^v>v^>>^>v^^^>^>vv^vv^<><^vv^^<^v>v>v>^^^v<v^>vv><>v>v<<v^^>^<v^<>>v>>><><^<<v^v>^^<><v^v<<v<^<<^<<vv<^^v<v<vv>>>^v^^^v<^^>^>>>^v^<v^>>>>^>>v<>^^<<<vvvv^><<^^^<><<<><><>>^v<>^>>^^><<><<v<<<^v^v^^^<<<<>v>v>><<><v<v>>^vv^>v<<<<^><v>^<<v>v<<v<^>^<^^><<>^v^>>vvv<<>><<vv>^v^^^^<^^><>v^<^>>>^v^<^<v<vvvv^>v<v^v<v>^v^v>v<<^^v^<<<v^><v>>v><^<vv>>v<>^vvv<<<<v^^>vv>^>>^<<^<<>v>^^vv<^<vvv^^<^v<v^<>>v<>><<>>><<v^<<^^v>><^<<^v><^<^^^<^>>>>v>>^<<<vv><v<vv^<><<>^vvvv>v>v>>v><^v^>v>v>^v>vv^<<vvvvv^<>^^<v><^vv<v>^>v><<v>>^>^vv<<<^<^>vv^<<><><>v^><vv><<>v^v>v>>v^^^<<v<^>v>v^^<<v<>>^>>^<v<v^v<>>>>>^<>^v<<><v<<^>^^^^<^v^^^<>>^^><v>>>v<><<<^<^<v<^>^vvv<^^><^v>^^vv<<^<<<^v^^>v<<vv^<v>v>><^v>vvv<v>>^>v<>>><<><<><<>v><v^^><><<<^<^<>>v^>>^v<>vvvv^<vv>>v<vv^v^v^^><<v^<<>^>v^v<<>v^v<v<<^<>><<>>><<^vv<<v>v^<^v",
    "^<^^^<><^^v<v><<^<<^<<>>v^<<vv<<^^><>^^^<>><>>>^<vvvvv^<>v<v^^>><vvv^<>v^>^<><v^^>>^><>>^v>^vvv^^vv<v>>v^<v<vvv>v<>^>>vv^^>v<vv<<<>v^^^<<>>>>v<<^v^^^>^<^^><>><<vv<<><>>v^vv>^><<><^^>><vv^>>>^<^v^<<<>^^v<>vv>>><^^^<v>v<>><<vv<>v^>v>>v<>^^><>^>v<^>^vvv^>^>^vv<^>^>^v^>v<<v<<^^^>>>>v>>v<<<<^<^<v><><vv^>>><>vv<<v^v><<^^v<^<>^v^v^>vv^>v^vvv><<v^<<^^v<<^^<<><vvv^<>vv>v<<vvv>^<v^v<>v>^^vvv><^v<<v^>><^vv^^^^v>>>>v<<>>>v^>^^<<>^^v^<^<^vv^>>><v^>>>^v^>v^^<^>vvv<>^^v^<v<<v^><>^^<><>^^>^^vv<><^>v^<><^vv^v>^>v<>v^^v<^>v><<v<<<<v^^^><vvvv^<v<>^v>^^v<<^<vv^v^<<<vv>v^v<^v^^<<^>>v^v>^v^>^<<^>v<<><^<^^vv>^v<vvv>v^^<^>^<^<^vv^^v>^<^^v<><^<^^vv<v^v<<vvvvv^v><v<<^^vvv^v^^>><>vv><<<><^>^v<>vv>vv^>^v><v<v<v<><v<<^<>^>>vv^v><^>>v><>^^v>^<<><vv>^<^v><>>>^<vv>^^vv^>><>>v<<><>vvv>^^v><^<>>>^>v><^>><^v>^<<v<^vv>^v^<^v<<v<v^>>v^v<^^v<^<v>>>>^v^>v^>^>>v<^^><<><><^>^>>^>^^^^^v^^<vv^>v^<>vvv^><v>^<><vv><>v<<><vv>v^<>v<^^^vv<v^<>>>>^vv>v<<>v<>^>>>v>^v>>^<<<><^vv^>>>>v<^v<^>v>><<v<<vv<<>^<><<>^v^<>vvv>vv<><v>>v^><<<<v^>",
    ">vv>v<^vv^^v>v>^^^<>vvv<^<>vv^^vvv>>v^<><^v<^v>>>>>^<<v<^^^><vv>^<^>v^^>v<>>>v^v>^^v^>^v<v>v<><>^^<^^^^>^^<<><^<>^^>v><^v>v^>vvv>>^>v><^<<>^v<v<>^^vv><^^<v<^v>>>^v>>>^<>v^^><v^<^<<<<<v^<^vvvv<v<v<<v><v>^<vv<<<v>>v^^<>v>^<>>^>v^<^<^^v^^<<v<^>^vvv>^<^v^<^<<vv<v^>>v<<vvv>>><v<v<vv^v><><>>>v><v><v<<^^>^<><><><>^<^<^^<<<v<v>>^vv^>>>v^>^vv^>^>^<v>><^v<><><>>>>v<^v^>vvv>v^<^^^>v^<^<^v<v^v<^<v<v>>>>v^v>>>^>vv^><^^>vv<^^<v>>^>^^<vv<^<vvv^v>vv^<><>>vvv><vv^<^vvv><^^>>v^^^<>v^^<<>v>>^<^v<>^>>vv<^vv>^^>>v^v^<<^^>^<<^^^<>v^^^^^<^^v<>^^><<><^^<^^>><^>>>>vv<v<v^<><>>^<vv><<vv>vvv^^vv^<><v<>^<v^vv><^vv>v<>>^>^<v<>v<>^<>^><^<^>vvv^^^<>v<>^v^v<^^^vv<><^<v>v^<^^<v>^<<<<>>^><<^v>vv<<^v<v<>v^v>vv<^v>^<<^^>vvv<>v^><^^>^^<<<<^vv<v<<^^<^<<v^>>v<^v>vv<><^v^vv^<<>^<>>>^>>>^><<v><^<><><^<^<>>v<^>v<^><<v<v^><><v^v^<v^vv^v<v><<<>^^><vv^^v>^vv>^>v^<v>><<<<^>^^<<^v<<<^>vv><<<>^^<^^^<v<>>v^>^>v<>v<^><<<v>^>^^>v^^<vvv<>^>vv>v<>^>>^v<^<><<>>>v^v<><<vv^><^<>>><vvv<vv<v>vv^><^<^>>^<>><<<^<^vv^<<^>v^<<><>>^>>v><<^>><^v<>^",
]

const test1Map = [
    "##########",
    "#..O..O.O#",
    "#......O.#",
    "#.OO..O.O#",
    "#..O@..O.#",
    "#O#..O...#",
    "#O..O..O.#",
    "#.OO.O.OO#",
    "#....O...#",
    "##########",
]

const test1Moves = [
    "<vv>^<v^>v>^vv^v>v<>v^v<v<^vv<<<^><<><>>v<vvv<>^v^>^<<<><<v<<<v^vv^v>^",
    "vvv<<^>^v^^><<>>><>^<<><^vv^^<>vvv<>><^^v>^>vv<>v<<<<v<^v>^<^^>>>^<v<v",
    "><>vv>v^v^<>><>>>><^^>vv>v<^^^>>v^v^<^^>v^^>v^<^v>v<>>v^v^<v>v^^<^^vv<",
    "<<v<^>>^^^^>>>v^<>vvv^><v<<<>^^^vv^<vvv>^>v<^^^^v<>^>vvvv><>>v^<<^^^^^",
    "^><^><>>><>^^<<^^v>>><^<v>^<vv>>v>>>^v><>^v><<<<v>>v<v<v>vvv>^<><<>^><",
    "^>><>^v<><^vvv<^^<><v<<<<<><^v<<<><<<^^<v<^^^><^>>^<v^><<<^>>^v<v^v<v^",
    ">^>>^v>vv>^<<^v<>><<><<v<<v><>v<^vv<<<>^^v^>^^>>><<^v>>v^v><^^>>^<>vv^",
    "<><^^>^^^<><vvvvv^v<v<<>^v<v>v<<^><<><<><<<^^<<<^<<>><<><^^^>^^<>^>v<>",
    "^^>vv<^v^v<vv>^<><v<^v>^^^>>>^^vvv^>vvv<>>>^<^>>>>>^<<^v>^vvv<>^<><<v>",
    "v^^>>><<^^<>>^v^<v^vv<>v^<<>^<^v^v><^<<<><<^<v><v<>vv>>v><v^<vv<>v^<<^",
]

const test2Map = [
    "########",
    "#..O.O.#",
    "##@.O..#",
    "#...O..#",
    "#.#.O..#",
    "#...O..#",
    "#......#",
    "########",
]

const test2Moves = [
    "<^^>>>vv<v>>v<<",
]

function main(mapData, movesData) {
    console.log("Day 15 part 1...")
    const map = parseMap(mapData)
    // printMap(map)
    // const robotPosition = findRobotPosition(map)
    // console.log(robotPosition)
    // const newMap = makeMove(map, robotPosition, "<")
    // printMap(newMap)

    movesData.forEach(rowOfMoves => {
        const moves = rowOfMoves.split("")
        moves.forEach(move => {
            // console.log("Trying to move to: " + move)
            makeMove(map, findRobotPosition(map), move)
            // printMap(map)
        })
    })

    console.log(calculateScore(map))

}

// main(test1Map, test1Moves)
// main(test2Map, test2Moves)
main(puzzleMap, puzzleMoves)

function calculateScore(map) {
    let score = 0
    map.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value === "O") {
                score += (100 * y + x)
            }
        })
    })
    return score
}

function makeMove(map, position, direction) {
    const moves = canMove(map, position, direction)
    if (moves === false) { return map }

    let offsetX = 0, offsetY = 0
    if (direction === "<") { offsetX = -1 }
    if (direction === ">") { offsetX = 1 }
    if (direction === "^") { offsetY = -1 }
    if (direction === "v") { offsetY = 1 }

    moves.forEach(box => {
        markPosition(map, { x: box.x + offsetX, y: box.y + offsetY }, "O")
        markPosition(map, position, "@")
    })
    markPosition(map, { x: position.x + offsetX, y: position.y + offsetY }, "@")
    markPosition(map, position, ".")
    return map
}

function canMove(map, position, direction) {
    const boxes = []
    let offsetX = 0, offsetY = 0
    if (direction === "<") { offsetX = -1 }
    if (direction === ">") { offsetX = 1 }
    if (direction === "^") { offsetY = -1 }
    if (direction === "v") { offsetY = 1 }

    if (hasWall(map, { x: position.x + offsetX, y: position.y + offsetY })) { return false }
    if (hasBox(map, { x: position.x + offsetX, y: position.y + offsetY })) {
        const canAllBoxesMove = canMove(map, { x: position.x + offsetX, y: position.y + offsetY }, direction)
        if (canAllBoxesMove === false) { return false }
        boxes.push(...canMove(map, { x: position.x + offsetX, y: position.y + offsetY }, direction))
        boxes.push({ x: position.x + offsetX, y: position.y + offsetY })
    }

    return boxes
}

function hasWall(map, position) {
    if (map[position.y][position.x] === "#") { return true }
    return false
}

function hasBox(map, position) {
    if (map[position.y][position.x] === "O") { return true }
    return false
}

function markPosition(map, position, mark) {
    // console.log(x + ", " + y)
    const markedMap = [...map]
    markedMap[Number(position.y)][Number(position.x)] = mark
    // console.log(markedMap)
    // printMap(markedMap)
    return markedMap
}

function findRobotPosition(map) {
    let currentX = null, currentY = null
    map.forEach((row, i) => {
        row.forEach((position, j) => {
            if (position === "@") {
                currentX = j
                currentY = i
            }
        })
    })
    return { x: currentX, y: currentY }
}

function parseMap(mapData) {
    const map = []
    mapData.forEach(mapRow => {
        map.push(mapRow.split(""))
    })
    return map
}

function printMap(map) {
    map.forEach(row => {
        let string = ""
        row.forEach(value => {
            string += value
        })
        console.log(string)
    })
}