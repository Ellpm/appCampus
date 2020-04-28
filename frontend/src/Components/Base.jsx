import React from "react";
import { connect } from "react-redux";
import Item from './Base/Item.jsx'

export class Base extends React.Component {
  render() {
    const { faculties, groups, students } = this.props.data;


    
    return (
      <ul>
        {faculties.length ? (
          faculties.map((item) => {
            
            return (
              <>
                <Item
                  facultyName={item.faculty_name}
                  id={item._id}                  
                />
              </>
            );
          })
        ) : (
          <div>Add task</div>
        )}
      </ul>
    );

    // return <div>Base</div>;
    }
}
const mapStateToProps = (state) => ({
  data: state.data.data,
});

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Base);
