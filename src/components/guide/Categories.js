import React from 'react'
import { Link } from 'gatsby'

import { Box, Heading, Grid, Stack, ResponsiveContext } from 'grommet'

const Category = ({ category, size }) => (
  <Link to='/search'>
    <Box margin='xsmall' flex height='small' style={{ minHeight: '200px', minWidth: '300px' }} data-testid={`${category.title}.category`}>
      <Stack fill>
        <Box fill background='dark-1' />
        <Box fill justify='end'>
          <Box fill='horizontal' align='center' justify='center' background={{ color: 'black', opacity: 'medium' }}><Heading level={3}>{category.name}</Heading></Box>
        </Box>
      </Stack>
    </Box>
  </Link>
)

const Categories = ({ categories = [] }) => {
  const size = React.useContext(ResponsiveContext)
  return (
    <Grid
      data-testid='categories'
      align='start'
      columns={size !== 'small' && { count: 'fill', size: 'medium' }}
      gap='xsmall'
    >
      {categories.map((category, index) => (
        <Category
          key={category.id}
          category={category}
          size={size}
        />
      ))}
    </Grid>
  )
}

export default Categories
