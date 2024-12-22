const input = [
    "#############################################################################################################################################",
    "#...#.........#...#.....#...#...#.........#.......#...#.....#...#...#...#...#.....#.....###...#.............#...#...#.....###...###.........#",
    "#.#.#.#######.#.#.#.###.#.#.#.#.#.#######.#.#####.#.#.#.###.#.#.#.#.#.#.#.#.#.###.#.###.###.#.#.###########.#.#.#.#.#.###.###.#.###.#######.#",
    "#.#.#.......#...#.#...#.#.#.#.#.#.#.....#.#.....#.#.#.#...#.#.#.#.#.#.#.#.#.#.#...#.#...#...#.#.#...........#.#.#.#.#...#.#...#...#.....#...#",
    "#.#.#######.#####.###.#.#.#.#.#.#.#.###.#.#####.#.#.#.###.#.#.#.#.#.#.#.#.#.#.#.###.#.###.###.#.#.###########.#.#.#.###.#.#.#####.#####.#.###",
    "#.#.......#...#...###.#.#.#...#.#...###.#.#...#.#...#.###.#.#.#...#...#...#.#.#.###.#...#.#...#.#.#...#...###.#.#.#.#...#.#.#.....#...#.#...#",
    "#.#######.###.#.#####.#.#.#####.#######.#.#.#.#.#####.###.#.#.#############.#.#.###.###.#.#.###.#.#.#.#.#.###.#.#.#.#.###.#.#.#####.#.#.###.#",
    "#...#.....###.#...#...#...#.....#...#...#.#.#.#.....#.#...#.#.....#...#...#.#.#...#.#...#.#.#...#.#.#...#...#.#.#.#.#...#.#.#.#.....#...#...#",
    "###.#.#######.###.#.#######.#####.#.#.###.#.#.#####.#.#.###.#####.#.#.#.#.#.#.###.#.#.###.#.#.###.#.#######.#.#.#.#.###.#.#.#.#.#########.###",
    "#...#.....#...#...#.......#...#...#.#.#...#.#...#...#.#.#...#...#...#...#.#...#...#.#...#.#.#...#...#...#...#.#.#.#.#...#...#.#.#.........###",
    "#.#######.#.###.#########.###.#.###.#.#.###.###.#.###.#.#.###.#.#########.#####.###.###.#.#.###.#####.#.#.###.#.#.#.#.#######.#.#.###########",
    "#...#.....#.#...###...#...#...#...#.#.#.###.#...#...#...#.#...#...#.......#...#.#...#...#.#.###.#.....#...#...#.#.#.#...#.....#.#.....#.....#",
    "###.#.#####.#.#####.#.#.###.#####.#.#.#.###.#.#####.#####.#.#####.#.#######.#.#.#.###.###.#.###.#.#########.###.#.#.###.#.#####.#####.#.###.#",
    "#...#.......#.....#.#.#...#...###.#.#.#.#...#.#...#.....#.#.#.....#.#.......#.#.#...#...#.#...#.#.#.......#...#.#.#.#...#.......#.....#.#...#",
    "#.###############.#.#.###.###.###.#.#.#.#.###.#.#.#####.#.#.#.#####.#.#######.#.###.###.#.###.#.#.#.#####.###.#.#.#.#.###########.#####.#.###",
    "#.#.....#.....#...#.#...#.#...#...#.#.#.#...#...#...###.#...#.....#...#...#...#...#...#.#.#...#.#...#...#.#...#.#.#.#...#.......#.......#...#",
    "#.#.###.#.###.#.###.###.#.#.###.###.#.#.###.#######.###.#########.#####.#.#.#####.###.#.#.#.###.#####.#.#.#.###.#.#.###.#.#####.###########.#",
    "#.#.###...###.#.###.#...#.#.#...#...#.#.###.......#...#.......#...#...#.#...#...#...#.#.#.#.....#.....#...#.#...#.#...#.#.#...#...#.........#",
    "#.#.#########.#.###.#.###.#.#.###.###.#.#########.###.#######.#.###.#.#.#####.#.###.#.#.#.#######.#########.#.###.###.#.#.#.#.###.#.#########",
    "#.#.....#.....#.....#.#...#...#...#...#.#.....#...#...#.......#...#.#.#.......#...#...#.#.#.......#...###...#.###...#.#.#...#...#.#...#.....#",
    "#.#####.#.###########.#.#######.###.###.#.###.#.###.###.#########.#.#.###########.#####.#.#.#######.#.###.###.#####.#.#.#######.#.###.#.###.#",
    "#...#...#.......#...#.#.......#...#.#...#...#.#...#...#...#.......#.#.###.........#...#...#...#...#.#...#.#...#...#.#...#.......#.....#.#...#",
    "###.#.#########.#.#.#.#######.###.#.#.#####.#.###.###.###.#.#######.#.###.#########.#.#######.#.#.#.###.#.#.###.#.#.#####.#############.#.###",
    "###...#...#...#...#.#.........#...#.#.#.....#.#...#...#...#.#.......#...#.......#...#.....#...#.#.#...#.#.#...#.#.#.#.....#...#...#...#.#...#",
    "#######.#.#.#.#####.###########.###.#.#.#####.#.###.###.###.#.#########.#######.#.#######.#.###.#.###.#.#.###.#.#.#.#.#####.#.#.#.#.#.#.###.#",
    "#.....#.#.#.#.#...#...........#.###.#.#...#...#...#...#.#...#.#.........#...###...#.......#...#.#.....#...#...#.#.#.#.#...#.#.#.#.#.#...#...#",
    "#.###.#.#.#.#.#.#.###########.#.###.#.###.#.#####.###.#.#.###.#.#########.#.#######.#########.#.###########.###.#.#.#.#.#.#.#.#.#.#.#####.###",
    "#...#...#...#.#.#...###.......#...#.#.#...#.#...#...#.#.#...#.#.#...#.....#.....###.......#...#.#...........###.#...#...#...#...#...#...#...#",
    "###.#########.#.###.###.#########.#.#.#.###.#.#.###.#.#.###.#.#.#.#.#.#########.#########.#.###.#.#############.#####################.#.###.#",
    "###.........#.#...#...#.........#.#.#.#...#.#.#.#...#.#.#...#.#.#.#.#...#.......#.........#.#...#.....#...#...#.#.....#.....#...#...#.#.....#",
    "###########.#.###.###.#########.#.#.#.###.#.#.#.#.###.#.#.###.#.#.#.###.#.#######.#########.#.#######.#.#.#.#.#.#.###.#.###.#.#.#.#.#.#######",
    "#...#...#...#.....#...#...#...#.#.#.#.#...#.#.#...#...#.#...#.#...#.#...#.#...###.........#.#...#.....#.#...#...#...#.#...#.#.#.#.#.#...#...#",
    "#.#.#.#.#.#########.###.#.#.#.#.#.#.#.#.###.#.#####.###.###.#.#####.#.###.#.#.###########.#.###.#.#####.###########.#.###.#.#.#.#.#.###.#.#.#",
    "#.#.#.#.#.........#...#.#...#.#.#.#.#.#...#.#.....#.###...#.#.#.....#...#.#.#.#...###...#.#.###.#.#...#.#...........#.....#...#...#.#...#.#.#",
    "#.#.#.#.#########.###.#.#####.#.#.#.#.###.#.#####.#.#####.#.#.#.#######.#.#.#.#.#.###.#.#.#.###.#.#.#.#.#.#########################.#.###.#.#",
    "#.#.#.#.###...###.#...#.....#...#...#.#...#...#...#...#...#.#.#.#.....#.#.#.#.#.#...#.#...#.#...#.#.#.#.#.....###.................#...###.#.#",
    "#.#.#.#.###.#.###.#.#######.#########.#.#####.#.#####.#.###.#.#.#.###.#.#.#.#.#.###.#.#####.#.###.#.#.#.#####.###.###############.#######.#.#",
    "#.#...#...#.#.#...#.#...###.#.......#.#...#...#...#...#.###.#.#.#.#...#.#.#.#...#...#.###...#.###...#...#...#.....#...............#.....#.#.#",
    "#.#######.#.#.#.###.#.#.###.#.#####.#.###.#.#####.#.###.###.#.#.#.#.###.#.#.#####.###.###.###.###########.#.#######.###############.###.#.#.#",
    "#.......#...#.#.#...#.#...#...#...#.#...#.#.#...#.#.....#...#.#.#.#...#.#.#.....#...#...#.....#...........#.......#.....#...#.....#...#...#.#",
    "#######.#####.#.#.###.###.#####.#.#.###.#.#.#.#.#.#######.###.#.#.###.#.#.#####.###.###.#######.#################.#####.#.#.#.###.###.#####.#",
    "###...#.....#...#.#...#...###...#...###...#...#...#.......#...#.#...#.#.#.#...#.###...#.....#...#...#...........#.#.....#.#.#.#...#...#...#.#",
    "###.#.#####.#####.#.###.#####.#####################.#######.###.###.#.#.#.#.#.#.#####.#####.#.###.#.#.#########.#.#.#####.#.#.#.###.###.#.#.#",
    "#...#.....#...#...#...#.....#...#...###.........###...#...#.###.#...#...#...#...#.....#...#.#.....#.#.#.........#...###...#.#.#.....#...#.#.#",
    "#.#######.###.#.#####.#####.###.#.#.###.#######.#####.#.#.#.###.#.###############.#####.#.#.#######.#.#.###############.###.#.#######.###.#.#",
    "#.......#...#.#.......#.....###.#.#.....#...#...#.....#.#.#...#...###...........#.....#.#.#...###...#.#.....###...#...#.#...#.#.......###...#",
    "#######.###.#.#########.#######.#.#######.#.#.###.#####.#.###.#######.#########.#####.#.#.###.###.###.#####.###.#.#.#.#.#.###.#.#############",
    "#.......#...#.........#.#.....#...#...#...#.#.###...#...#...#...#...#.#.......#.#.....#.#...#...#...#.#.....#...#...#...#.....#.............#",
    "#.#######.###########.#.#.###.#####.#.#.###.#.#####.#.#####.###.#.#.#.#.#####.#.#.#####.###.###.###.#.#.#####.#############################.#",
    "#...#...#...###.....#.#.#.#...#...#.#...###...#.....#.....#...#...#...#.....#...#...#...###...#...#...#.......#...................#...#.....#",
    "###.#.#.###.###.###.#.#.#.#.###.#.#.###########.#########.###.#############.#######.#.#######.###.#############.#################.#.#.#.#####",
    "###...#...#...#...#...#...#...#.#.#.......#...#.....#.....###.#.....#.....#.......#...###...#.....###.......#...#...........#...#...#...#...#",
    "#########.###.###.###########.#.#.#######.#.#.#####.#.#######.#.###.#.###.#######.#######.#.#########.#####.#.###.#########.#.#.#########.#.#",
    "#.....###...#...#...........#...#.......#...#...###.#...#...#.#...#.#...#.#.....#.#.....#.#.###.......#...#...###.#.........#.#.###...###.#.#",
    "#.###.#####.###.###########.###########.#######.###.###.#.#.#.###.#.###.#.#.###.#.#.###.#.#.###.#######.#.#######.#.#########.#.###.#.###.#.#",
    "#...#.#...#...#.............#.........#.........#...#...#.#...#...#.#...#.#.###...#...#...#...#.........#.........#...#...#...#...#.#...#.#.#",
    "###.#.#.#.###.###############.#######.###########.###.###.#####.###.#.###.#.#########.#######.#######################.#.#.#.#####.#.###.#.#.#",
    "#...#.#.#.###...........#.....#.......#...###...#...#.###.#...#.###...###.#.#...#...#.......#.........................#.#.#.#.....#.#...#.#.#",
    "#.###.#.#.#############.#.#####.#######.#.###.#.###.#.###.#.#.#.#########.#.#.#.#.#.#######.###########################.#.#.#.#####.#.###.#.#",
    "#...#.#.#.#.............#.....#.#.......#.....#...#.#...#.#.#.#.....#...#...#.#...#.........#...........................#...#.......#.###.#.#",
    "###.#.#.#.#.#################.#.#.###############.#.###.#.#.#.#####.#.#.#####.###############.#######################################.###.#.#",
    "#...#...#...#...#.....#...#...#...#.....#...#.....#...#.#.#.#.#...#...#.#...#...#...#...#...#...#.................#.....#...#.......#.....#.#",
    "#.###########.#.#.###.#.#.#.#######.###.#.#.#.#######.#.#.#.#.#.#.#####.#.#.###.#.#.#.#.#.#.###.#.###############.#.###.#.#.#.#####.#######.#",
    "#.#.....#.....#.#.###.#.#...#.......###...#.#.......#...#...#.#.#.#...#.#.#.###...#...#...#.....#...............#.#...#...#...#.....#...#...#",
    "#.#.###.#.#####.#.###.#.#####.#############.#######.#########.#.#.#.#.#.#.#.###################################.#.###.#########.#####.#.#.###",
    "#...#...#...###.#.#...#.....#...#.........#.#.....#...#...###...#.#.#.#...#.#.........#...#.................#...#...#.........#.....#.#...###",
    "#####.#####.###.#.#.#######.###.#.#######.#.#.###.###.#.#.#######.#.#.#####.#.#######.#.#.#.###############.#.#####.#########.#####.#.#######",
    "#.....#...#...#.#.#.#...#...###...#...#...#.#.###...#...#...#.....#.#...#...#.......#.#.#.#.......#...#...#...#...#...#...#...#...#...#.....#",
    "#.#####.#.###.#.#.#.#.#.#.#########.#.#.###.#.#####.#######.#.#####.###.#.#########.#.#.#.#######.#.#.#.#.#####.#.###.#.#.#.###.#.#####.###.#",
    "#.#...#.#...#.#.#.#.#.#.#.#.........#...#...#.....#.#...#...#...#...#...#.#...#.....#...#.#.......#.#...#.......#...#...#.#.###.#...###.#...#",
    "#.#.#.#.###.#.#.#.#.#.#.#.#.#############.#######.#.#.#.#.#####.#.###.###.#.#.#.#########.#.#######.###############.#####.#.###.###.###.#.###",
    "#.#.#.#.#...#.#...#...#...#.............#.........#.#.#...#...#...###...#.#.#...#...#...#.#.........#.......#.....#.....#.#.....#...#...#...#",
    "#.#.#.#.#.###.#########################.###########.#.#####.#.#########.#.#.#####.#.#.#.#.###########.#####.#.###.#####.#.#######.###.#####.#",
    "#.#.#...#...#.#...#...###...............#.........#.#.......#.........#...#.......#...#.#.#...###...#.....#...###.#.....#.......#.###...#...#",
    "#.#.#######.#.#.#.#.#.###.###############.#######.#.#################.#################.#.#.#.###.#.#####.#######.#.###########.#.#####.#.###",
    "#.#.......#.#.#.#...#.....#.........#.....#.......#...#...........#...#.............#...#...#.#...#...###.......#...#...#.....#...#.....#...#",
    "#.#######.#.#.#.###########.#######.#.#####.#########.#.#########.#.###.###########.#.#######.#.#####.#########.#####.#.#.###.#####.#######.#",
    "#...#.....#...#...#.......#...#...#...#...#...#...###...#.....###...###...........#.#.......#.#.....#.........#...#...#...#...#.....#...#...#",
    "###.#.###########.#.#####.###.#.#.#####.#.###.#.#.#######.###.###################.#.#######.#.#####.#########.###.#.#######.###.#####.#.#.###",
    "#...#.#.......###...#.....#...#.#.......#...#...#...#...#.#...#########.........#.#.###.....#.#...#.........#...#...#.....#.....#.....#...###",
    "#.###.#.#####.#######.#####.###.###########.#######.#.#.#.#.###########.#######.#.#.###.#####.#.#.#########.###.#####.###.#######.###########",
    "#...#.#.....#.#.......#.....###.....###...#.........#.#.#.#...#########.......#...#.....#...#.#.#.#...#.....###.#...#...#...#...#...........#",
    "###.#.#####.#.#.#######.###########.###.#.###########.#.#.###.###############.###########.#.#.#.#.#.#.#.#######.#.#.###.###.#.#.###########.#",
    "###...#.....#...#...#...###.......#.....#.....#...#...#...#...###S#####.....#.............#.#...#...#.#.......#.#.#.#...###...#.#...........#",
    "#######.#########.#.#.#####.#####.###########.#.#.#.#######.#####.#####.###.###############.#########.#######.#.#.#.#.#########.#.###########",
    "#.......#...#...#.#...#...#.....#.#...........#.#...#...#...#####.#####.#...###...###.......#...#...#...#.....#...#...#.....#...#...........#",
    "#.#######.#.#.#.#.#####.#.#####.#.#.###########.#####.#.#.#######.#####.#.#####.#.###.#######.#.#.#.###.#.#############.###.#.#############.#",
    "#...#...#.#...#...#.....#.......#.#.............#...#.#...#######.#...#.#...#...#...#.......#.#.#.#...#...#.............#...#.....#.........#",
    "###.#.#.#.#########.#############.###############.#.#.###########.#.#.#.###.#.#####.#######.#.#.#.###.#####.#############.#######.#.#########",
    "###...#...###...###.............#.......#.........#...###########.#.#.#...#.#.....#.#.....#.#.#.#.#...#...#.#.......#...#.#.......#.........#",
    "#############.#.###############.#######.#.#######################.#.#.###.#.#####.#.#.###.#.#.#.#.#.###.#.#.#.#####.#.#.#.#.###############.#",
    "###...........#.....#...#...#...#.....#...#...#.....#############.#.#.#...#.#.....#...#...#...#...#.....#...#.....#...#...#...#.....#.......#",
    "###.###############.#.#.#.#.#.###.###.#####.#.#.###.#############.#.#.#.###.#.#########.#########################.###########.#.###.#.#######",
    "#...#...#...#.....#...#...#...#...#...#...#.#.#.#...#############.#.#.#.#...#.....#...#.#.....#...#.............#.......#...#.#.#...#.......#",
    "#.###.#.#.#.#.###.#############.###.###.#.#.#.#.#.###############.#.#.#.#.#######.#.#.#.#.###.#.#.#.###########.#######.#.#.#.#.#.#########.#",
    "#...#.#...#.#...#.....#...#...#...#.###.#.#.#.#.#.#.......#######.#.#...#.###...#.#.#...#.#...#.#.#...........#.#.......#.#.#...#.......#...#",
    "###.#.#####.###.#####.#.#.#.#.###.#.###.#.#.#.#.#.#.#####.#######.#.#####.###.#.#.#.#####.#.###.#.###########.#.#.#######.#.###########.#.###",
    "###...###...#...#...#...#...#.#...#...#.#.#.#.#.#...#.....#######...#.....#...#...#.....#.#...#.#.#...#.......#...#.......#.........###...###",
    "#########.###.###.#.#########.#.#####.#.#.#.#.#.#####.###############.#####.###########.#.###.#.#.#.#.#.###########.###############.#########",
    "#.........#...#...#...........#.#.....#.#.#.#...#.....#...###########.#...#.........#...#...#.#.#.#.#.#...#...#...#.#...............#.......#",
    "#.#########.###.###############.#.#####.#.#.#####.#####.#.###########.#.#.#########.#.#####.#.#.#.#.#.###.#.#.#.#.#.#.###############.#####.#",
    "#.#.........###.........#.....#.#...#...#...#.....#...#.#...#########...#...#...#...#...#...#.#.#.#.#.#...#.#...#...#.............###.#.....#",
    "#.#.###################.#.###.#.###.#.#######.#####.#.#.###.###############.#.#.#.#####.#.###.#.#.#.#.#.###.#####################.###.#.#####",
    "#.#.#.............#.....#.###...###.#.....#...#...#.#.#.#...#...#########...#.#.#...#...#...#.#.#.#.#.#.....#...#.................#...#.....#",
    "#.#.#.###########.#.#####.#########.#####.#.###.#.#.#.#.#.###.#.#########.###.#.###.#.#####.#.#.#.#.#.#######.#.#.#################.#######.#",
    "#...#...#.......#...#.....#.........#...#.#.#...#.#.#.#.#.#...#.#...#..E#.#...#.#...#.#...#.#.#.#...#...#.....#...###...............#.....#.#",
    "#######.#.#####.#####.#####.#########.#.#.#.#.###.#.#.#.#.#.###.#.#.#.###.#.###.#.###.#.#.#.#.#.#######.#.###########.###############.###.#.#",
    "#...###.#.#.....#...#.#.....#.......#.#.#.#.#...#.#.#.#.#.#.#...#.#...###.#...#.#.#...#.#.#.#.#.###.....#.............#...........#...###...#",
    "#.#.###.#.#.#####.#.#.#.#####.#####.#.#.#.#.###.#.#.#.#.#.#.#.###.#######.###.#.#.#.###.#.#.#.#.###.###################.#########.#.#########",
    "#.#.#...#.#...#...#...#.......#...#.#.#...#...#.#.#.#...#.#.#...#.....#...#...#.#.#...#.#.#.#.#...#...#...#...#...#...#.........#.#.#.......#",
    "#.#.#.###.###.#.###############.#.#.#.#######.#.#.#.#####.#.###.#####.#.###.###.#.###.#.#.#.#.###.###.#.#.#.#.#.#.#.#.#########.#.#.#.#####.#",
    "#.#.#...#.#...#.#...#...........#...#...#...#...#.#...#...#...#.#...#.#.#...#...#.#...#.#.#.#.#...#...#.#.#.#.#.#...#.#...#.....#...#.#.....#",
    "#.#.###.#.#.###.#.#.#.#################.#.#.#####.###.#.#####.#.#.#.#.#.#.###.###.#.###.#.#.#.#.###.###.#.#.#.#.#####.#.#.#.#########.#.#####",
    "#.#...#.#.#.....#.#...#...............#...#.#.....#...#.#...#.#.#.#.#.#...#...#...#...#.#.#.#.#...#...#.#.#.#.#...###...#...###...###.#.#...#",
    "#.###.#.#.#######.#####.#############.#####.#.#####.###.#.#.#.#.#.#.#.#####.###.#####.#.#.#.#.###.###.#.#.#.#.###.#############.#.###.#.#.#.#",
    "#...#.#...#...###...#...#.............#.....#.....#.###.#.#...#.#.#...#.....#...###...#.#.#.#...#...#.#.#.#.#...#.........#...#.#.....#...#.#",
    "###.#.#####.#.#####.#.###.#############.#########.#.###.#.#####.#.#####.#####.#####.###.#.#.###.###.#.#.#.#.###.#########.#.#.#.###########.#",
    "#...#...#...#.......#...#...#...#...#...#.........#...#.#.#.....#.#...#...#...#...#.....#...#...#...#...#...#...#...#...#...#...#...#.......#",
    "#.#####.#.#############.###.#.#.#.#.#.###.###########.#.#.#.#####.#.#.###.#.###.#.###########.###.###########.###.#.#.#.#########.#.#.#######",
    "#.#...#...#.........#...#...#.#.#.#.#...#...#.....#...#.#.#.#...#...#...#.#.....#.....###...#.#...#...#...###...#.#.#.#...#.......#.#.....###",
    "#.#.#.#####.#######.#.###.###.#.#.#.###.###.#.###.#.###.#.#.#.#.#######.#.###########.###.#.#.#.###.#.#.#.#####.#.#.#.###.#.#######.#####.###",
    "#...#.....#.#.....#.#.###...#.#...#.#...#...#...#.#.#...#.#...#...#...#.#.#...#.....#.#...#...#.....#...#.....#.#.#.#...#.#.......#.#...#...#",
    "#########.#.#.###.#.#.#####.#.#####.#.###.#####.#.#.#.###.#######.#.#.#.#.#.#.#.###.#.#.#####################.#.#.#.###.#.#######.#.#.#.###.#",
    "#...###...#.#...#...#...###...#.....#...#.#...#.#.#.#.#...#.......#.#...#.#.#...#...#.#.#...#...#.....#...#...#.#.#.#...#...#...#.#.#.#.#...#",
    "#.#.###.###.###.#######.#######.#######.#.#.#.#.#.#.#.#.###.#######.#####.#.#####.###.#.#.#.#.#.#.###.#.#.#.###.#.#.#.#####.#.#.#.#.#.#.#.###",
    "#.#.....#...###...#.....#.......#...#...#.#.#...#...#.#...#...#...#.....#.#...###...#.#.#.#...#.#.###.#.#...###.#.#.#...#...#.#...#...#.#...#",
    "#.#######.#######.#.#####.#######.#.#.###.#.#########.###.###.#.#.#####.#.###.#####.#.#.#.#####.#.###.#.#######.#.#.###.#.###.#########.###.#",
    "#.#.....#.#.......#.....#.....#...#.#...#.#.........#...#.#...#.#...#...#.....#...#...#...###...#...#.#.###.....#.#.....#...#...#...###.#...#",
    "#.#.###.#.#.###########.#####.#.###.###.#.#########.###.#.#.###.###.#.#########.#.###########.#####.#.#.###.#####.#########.###.#.#.###.#.###",
    "#.#.#...#.#.#...#...#...###...#.#...#...#...#.....#.###...#...#.###.#.......###.#...........#...#...#.#...#.#...#...###...#...#...#...#.#...#",
    "#.#.#.###.#.#.#.#.#.#.#####.###.#.###.#####.#.###.#.#########.#.###.#######.###.###########.###.#.###.###.#.#.#.###.###.#.###.#######.#.###.#",
    "#...#.....#.#.#.#.#.#.#.....#...#...#.....#...#...#...###...#...#...#.....#.....#.....#...#.###.#.###.#...#...#...#.....#.###.....#...#.....#",
    "###########.#.#.#.#.#.#.#####.#####.#####.#####.#####.###.#.#####.###.###.#######.###.#.#.#.###.#.###.#.#########.#######.#######.#.#########",
    "#...........#.#.#.#.#.#.....#...#...#...#.....#.....#...#.#.....#...#...#.#...#...#...#.#.#.#...#...#.#.###.....#...#...#...#.....#.........#",
    "#.###########.#.#.#.#.#####.###.#.###.#.#####.#####.###.#.#####.###.###.#.#.#.#.###.###.#.#.#.#####.#.#.###.###.###.#.#.###.#.#############.#",
    "#...#.....#...#.#.#.#.#.....#...#.#...#...#...#...#.....#.....#.....#...#.#.#.#...#.#...#...#...#...#.#...#.#...#...#.#.#...#.#...#.....#...#",
    "###.#.###.#.###.#.#.#.#.#####.###.#.#####.#.###.#.###########.#######.###.#.#.###.#.#.#########.#.###.###.#.#.###.###.#.#.###.#.#.#.###.#.###",
    "#...#.#...#...#.#.#.#.#.#...#...#.#.#.....#.....#...#.........#.....#...#.#.#.#...#.#.#.........#...#...#...#.#...#...#.#.#...#.#.#.#...#...#",
    "#.###.#.#####.#.#.#.#.#.#.#.###.#.#.#.#############.#.#########.###.###.#.#.#.#.###.#.#.###########.###.#####.#.###.###.#.#.###.#.#.#.#####.#",
    "#.....#.......#...#...#...#.....#...#...............#...........###.....#...#...###...#.............###.......#.....###...#.....#...#.......#",
    "#############################################################################################################################################",
]

const test1 = [
    "###############",
    "#...#...#.....#",
    "#.#.#.#.#.###.#",
    "#S#...#.#.#...#",
    "#######.#.#.###",
    "#######.#.#...#",
    "#######.#.###.#",
    "###..E#...#...#",
    "###.#######.###",
    "#...###...#...#",
    "#.#####.#.###.#",
    "#.#...#.#.#...#",
    "#.#.#.#.#.#.###",
    "#...#...#...###",
    "###############",
]

function main(data, minDelta) {
    console.log("Day 20 part 1...")
    const parsedData = parseData(data)
    const normalPathLength = findPath(parsedData)
    console.log(normalPathLength)
    const listOfPossibleCheats = findCheats(parsedData)
    console.log(listOfPossibleCheats.length)

    const cheatedLengths = []

    listOfPossibleCheats.forEach((cheat, index) => {
        console.log(index)
        const cheatMap = JSON.parse(JSON.stringify(parsedData))
        markPosition(cheatMap, cheat)
        cheatedLengths.push(findPath(cheatMap))
    })

    console.log(cheatedLengths)
    let count = 0

    cheatedLengths.forEach(length => {
        if (length <= (normalPathLength - minDelta)) { count++ }
    })

    console.log("Totaal: " + count)

}

// main(test1, 10) // 10
main(input, 100)

function markPosition(map, position) {
    const markedMap = [...map]
    markedMap[Number(position.y)][Number(position.x)] = "."
    return markedMap
}

function findCheats(map) {
    const possibleCheats = []
    map.forEach((row, i) => {
        row.forEach((value, j) => {
            if (value === "#" && i > 0 && i < map.length - 1 && j > 0 && j < row.length - 1) {
                // if ((map[i + 1][j] === "." && map[i - 1][j] === ".") || (map[i][j + 1] === "." && map[i][j - 1] === ".")) {
                if (getNeighboursWithValue(map, { x: j, y: i }).length >= 1) {
                    possibleCheats.push({ x: j, y: i })
                }
            }
        })
    })
    return possibleCheats
}

function getNeighboursWithValue(map, position, targetValue = ".") { // only orthogonal neighbours Rick! Learn to read...
    const neighbours = []
    const offsets = [
        { offsetX: -1, offsetY: 0 },
        { offsetX: 1, offsetY: 0 },
        { offsetX: 0, offsetY: -1 },
        { offsetX: 0, offsetY: 1 },
    ]

    offsets.forEach(offset => {
        const indexX = Number(position.x) + offset.offsetX
        const indexY = Number(position.y) + offset.offsetY
        // console.log("trying " + indexX + ", " + indexY)
        if (map?.[indexY]?.[indexX]
        ) {
            if (map[indexY][indexX] === targetValue) {
                // console.log("found a neighbour!")
                neighbours.push({ value: Number(map[indexY][indexX]), x: indexX, y: indexY })
            }
        }
    })

    return neighbours
}

function parseData(data) {
    const parsedData = []
    data.forEach(row => {
        parsedData.push(row.split(""))
    })
    return parsedData
}


/**
 * 1 Create a set of all unvisited nodes: the unvisited set.
 * 
 * 2 Assign to every node a distance from start value: for the starting node, it is zero, and for all other nodes, 
 * it is infinity, since initially no path is known to these nodes. During execution, the distance of a node N is the 
 * length of the shortest path discovered so far between the starting node and N.
 * 
 * 3 From the unvisited set, select the current node to be the one with the smallest (finite) distance; initially, this 
 * is the starting node (distance zero). If the unvisited set is empty, or contains only nodes with infinite distance 
 * (which are unreachable), then the algorithm terminates by skipping to step 6. If the only concern is the path to a 
 * target node, the algorithm terminates once the current node is the target node. Otherwise, the algorithm continues.
 * 
 * 4 For the current node, consider all of its unvisited neighbors and update their distances through the current node; 
 * compare the newly calculated distance to the one currently assigned to the neighbor and assign the smaller one to 
 * it. For example, if the current node A is marked with a distance of 6, and the edge connecting it with its 
 * neighbor B has length 2, then the distance to B through A is 6 + 2 = 8. If B was previously marked with a distance 
 * greater than 8, then update it to 8 (the path to B through A is shorter). Otherwise, keep its current distance 
 * (the path to B through A is not the shortest).
 * 
 * 5 After considering all of the current node's unvisited neighbors, the current node is removed from the unvisited 
 * set. Thus a visited node is never rechecked, which is correct because the distance recorded on the current node is 
 * minimal (as ensured in step 3), and thus final. Repeat from to step 3.
 * 
 * 6 Once the loop exits (steps 3–5), every visited node contains its shortest distance from the starting node.
 */
function findPath(map) {
    const nodesWithSmallestDistance = []
    // 1 + 2
    const unvisitedNodes = findAllUnvisitedNodes(map)
    // console.log(unvisitedNodes)

    while (unvisitedNodes.some(node => (node.distance !== Number.POSITIVE_INFINITY))) {

        // 3
        const nodeWithSmallestDistance = getNodeWithSmallestDistance(unvisitedNodes)
        // console.log("nodeWithSmallestDistance:")
        // console.log(nodeWithSmallestDistance)
        // 4
        getNeighbours(unvisitedNodes, nodeWithSmallestDistance)
        // console.log("neighbors:")
        // console.log(neighbors)
        // 5
        removeSmallestNode(unvisitedNodes, nodeWithSmallestDistance)
        // console.log("unvisitedNodes:")
        // console.log(unvisitedNodes)
        if (nodeWithSmallestDistance.value === "E") {
            nodesWithSmallestDistance.push(nodeWithSmallestDistance)
        }
    }

    // 6
    // console.log("nodesWithSmallestDistance:")
    // console.log(nodesWithSmallestDistance)
    return nodesWithSmallestDistance[0].distance
}

function removeSmallestNode(unvisitedNodes, nodeWithSmallestDistance) {
    const index = unvisitedNodes.findIndex(node => (node.x === nodeWithSmallestDistance.x && node.y === nodeWithSmallestDistance.y))
    unvisitedNodes.splice(index, 1)
}

function getNeighbours(unvisitedNodes, startNode) {
    const neighbours = []
    const offsets = []

    offsets.push({ offsetX: 1, offsetY: 0 })
    offsets.push({ offsetX: -1, offsetY: 0 })
    offsets.push({ offsetX: 0, offsetY: -1 })
    offsets.push({ offsetX: 0, offsetY: 1 })

    offsets.forEach(offset => {
        const indexX = startNode.x + offset.offsetX
        const indexY = startNode.y + offset.offsetY
        if (unvisitedNodes.some(node => (node.x === indexX && node.y === indexY))) {
            const newNode = unvisitedNodes[unvisitedNodes.findIndex(node => (node.x === indexX && node.y === indexY))]
            const newDistance = startNode.distance + 1
            if (newDistance < newNode.distance) { newNode.distance = newDistance }
            neighbours.push(newNode)
        }
    })

    return neighbours
}

function findStartPosition(map) {
    let currentX = null, currentY = null
    map.forEach((row, i) => {
        row.forEach((position, j) => {
            if (position === "S") {
                currentX = j
                currentY = i
            }
        })
    })
    return { x: currentX, y: currentY }
}

function getNodeWithSmallestDistance(unvisitedNodes) {
    let smallestNode = unvisitedNodes[0]
    unvisitedNodes.forEach(node => {
        if (node.distance < smallestNode.distance) {
            smallestNode = node
        }
    })
    return smallestNode
}

function findAllUnvisitedNodes(map) {
    const nodes = []
    map.forEach((row, i) => {
        row.forEach((position, j) => {
            if (position !== "#") {
                nodes.push({
                    x: j,
                    y: i,
                    distance: Number.POSITIVE_INFINITY,
                    value: position
                })
            }
        })
    })
    const startingPosition = findStartPosition(map)
    nodes[nodes.findIndex(node => (node.x === startingPosition.x && node.y === startingPosition.y))].distance = 0
    return nodes
}