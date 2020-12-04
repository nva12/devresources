import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';

const ResourceCard = ({
  title = 'Resource Name',
  categories = ['Uncategorized'],
  description = 'A short description of this resource.',
  tags = ['Tag 1', 'Tag 2', 'Tag 3'],
  url = `/`,
}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Category:{' '}
          {categories.map((cat) => {
            return (
              <span key={cat}>
                <a href='/'>{cat}</a>{' '}
              </span>
            );
          })}
        </Card.Text>
        <Card.Text>{description}</Card.Text>
        <Card.Text>
          {tags.map((tag) => {
            return (
              <span key={tag}>
                <a href='/'>
                  <Badge variant='secondary'>{tag}</Badge>
                </a>{' '}
              </span>
            );
          })}
        </Card.Text>

        <a href={url}>
          <Button variant='primary'>Visit Site</Button>
        </a>
      </Card.Body>
    </Card>
  );
};

export default ResourceCard;
