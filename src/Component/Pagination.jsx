import React from 'react'
import{Box,Button} from "@chakra-ui/react";
const Pagination = ({ page, setPage, totalPages }) => {
    return (
        <Box className="btn-groups">
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Prev
        </Button>
        <Button>{page}</Button>
        <Button onClick={() => setPage(page + 1)} disabled={page === totalPages}>
          Next
        </Button>
      </Box>
    )
}

export default Pagination
