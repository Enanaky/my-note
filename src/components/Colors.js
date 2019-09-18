import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { updateColor } from '../redux/actions/noteActions';
import PropTypes from 'prop-types';

function Colors({ id, changeColor }) {
  useEffect(() => {
    //Colors
    const elems = document.querySelectorAll('.fixed-action-btn');
    // eslint-disable-next-line no-undef
    M.FloatingActionButton.init(elems, {
      direction: 'top',
      hoverEnabled: true
    });
  }, []);

  const colors = [
    { color: '#ffffff' }, //blanco
    { color: '#e8eaed' }, //gris
    { color: '#fff475' }, //amarillo
    { color: '#fbbc04' }, //naranja
    { color: '#e6c9a8' }, //marrón
    { color: '#f28b82' }, //rojo
    { color: '#fdcfe8' }, //rosa
    { color: '#e0c8f5' }, //violeta
    { color: '#ccff90' }, //verde
    { color: '#a7ffeb' }, //turquesa
    { color: '#cbf0f8' }, //celeste
    { color: '#aecbfa' } //azul
  ];

  function getColor() {
    return colors.map(item => {
      return (
        <li key={item.color}>
          <a
            className="btn-floating"
            onClick={() => changeColor(id, item.color)}
            style={{ backgroundColor: item.color }}
          ></a>
        </li>
      );
    });
  }

  return (
    <div className="fixed-action-btn" style={{ display: 'flex' }}>
      <i className="material-icons tool-icon flex-end">color_lens</i>
      <ul className="colors-container">{getColor()}</ul>
    </div>
  );
}

Colors.propTypes = {
  id: PropTypes.string,
  changeColor: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    changeColor: (id, newColor) => dispatch(updateColor(id, newColor))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Colors);
