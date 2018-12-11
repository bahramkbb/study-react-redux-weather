import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

class WeatherList extends React.Component {
  average(data){
    return _.round(_.sum(data)/data.length);
  }

  renderList(){
    return this.props.weather.map(item =>
      <tr key={item.city.id}>
        <td>{item.city.name}</td>
        <td>
          <div>
            <Sparklines data={item.list.map(weather => weather.main.temp)} width={250} height={170} margin={5} >
              <SparklinesLine color="orange" />
              <SparklinesReferenceLine type="mean" />
            </Sparklines>
            <div>
              {this.average(item.list.map(weather => weather.main.temp))}
            </div>
          </div>
        </td>
        <td>
          <div>
            <Sparklines data={item.list.map(weather => weather.main.pressure)} width={250} height={170} margin={5}>
              <SparklinesLine color="red" />
              <SparklinesReferenceLine type="mean" />
            </Sparklines>
            <div>
              {this.average(item.list.map(weather => weather.main.pressure))}
            </div>
          </div>
        </td>
        <td>
          <div>
            <Sparklines data={item.list.map(weather => weather.main.humidity)} width={250} height={170}  margin={5}>
              <SparklinesLine color="blue" />
              <SparklinesReferenceLine type="mean" />
            </Sparklines>
            <div>
              {this.average(item.list.map(weather => weather.main.humidity))}
            </div>
          </div>
        </td>
      </tr>
    );
  }

  render() {
    return (
      <div class="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">City</th>
              <th scope="col">Temprature</th>
              <th scope="col">Pressure</th>
              <th scope="col">Humidity</th>
            </tr>
          </thead>
          <tbody>
              {this.renderList()}
          </tbody>
        </table>
      </div>
    );
  }
};

function mapStateToProps({weather}) {
  return {weather};
}

export default connect(mapStateToProps)(WeatherList);
