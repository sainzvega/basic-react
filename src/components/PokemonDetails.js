import React from "react";
import { Form, Dropdown, Grid, Button } from "semantic-ui-react";

const PokemonDetails = () => (
  <Form size="large">
    <Form.Field
      name="rank"
      label="Rank"
      width={16}
      control={Dropdown}
      fluid
      selection
    />
    <Form.Field
      name="gunnery"
      label="Gunnery"
      width={6}
      control={Dropdown}
      fluid
      selection
    />
    <Form.Field
      name="piloting"
      label="Piloting"
      width={6}
      control={Dropdown}
      fluid
      selection
    />
    <Form.Field name="mech" label="Mech" width={16} control={Dropdown} fluid />
    <Grid.Row width={16}>
      <Button primary type="button">
        Start Editing
      </Button>
      <Button secondary type="button">
        Stop Editing
      </Button>
    </Grid.Row>
  </Form>
);

export default PokemonDetails;
