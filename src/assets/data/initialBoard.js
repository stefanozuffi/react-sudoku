const emptylBoard = Array(9).fill(null).flatMap((_, row) => 
    Array(9).fill(null).map((_, col) => ({
      id: `${row}-${col}`,
      row,
      col,
      value: null,
      isInitial: false
    }))
  );

export default emptylBoard;