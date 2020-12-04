import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ResourceCard from '../components/ResourceCard';
import { dummyResources } from '../data/dummyResources';

const HomeScreen = () => {
  const resources = dummyResources;

  return (
    <Row>
      {resources.map((item) => (
        <Col key={item.id}>
          <ResourceCard
            title={item.title}
            categories={item.categories}
            description={item.description}
            tags={item.tags}
            url={item.url}
          />
        </Col>
      ))}
    </Row>
  );
};

export default HomeScreen;
