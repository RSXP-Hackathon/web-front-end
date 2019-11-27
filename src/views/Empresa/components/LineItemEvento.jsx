import React from 'react';
import {
  Media,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
} from 'reactstrap';
import moment from 'moment';

export default ({ data }) => {
  return (
  <tr key={data._id}>
    <th scope="row">
      <Media className="align-items-center">
        <a
          className="avatar rounded-circle mr-3"
          href="#pablo"
          onClick={e => e.preventDefault()}
        >
          <img
            alt="..."
            src={require("assets/img/theme/bootstrap.jpg")}
          />
        </a>
        <Media>
          <span className="mb-0 text-sm">
            {data.title}
          </span>
        </Media>
      </Media>
    </th>
    <td>{moment.parseZone(data.date).format('DD/MM/YYYY')}</td>
    <td>
      <Media className="align-items-center">
        <a
          className="avatar avatar-sm mr-3"
          href="#pablo"
          id="tooltip742438047"
          onClick={e => e.preventDefault()}
        >
          <img
            alt="..."
            className="rounded-circle"
            src={require("assets/img/theme/team-1-800x800.jpg")}
          />
        </a>
        <Media>
          <span className="mb-0 text-sm">     
              {data.mentor || '-'}
          </span>
        </Media>
      </Media>
    </td>
    <td>
      {`${data.city} - ${data.uf}`}
    </td>
    <td>
      <div className="d-flex align-items-center">
        {Math.floor(Math.random() * 20)}
      </div>
    </td>
    <td className="text-right">
      <UncontrolledDropdown>
        <DropdownToggle
          className="btn-icon-only text-light"
          href="#pablo"
          role="button"
          size="sm"
          color=""
          onClick={e => e.preventDefault()}
        >
          <i className="fas fa-ellipsis-v" />
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-arrow" right>
          <DropdownItem
            href="#pablo"
            onClick={e => e.preventDefault()}
          >
            Visualizar
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </td>
  </tr>
);
  };