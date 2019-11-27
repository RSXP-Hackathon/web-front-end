import React from 'react';
import {
  Media,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
} from 'reactstrap';

export default (props) => (
  <tr>
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
            Introdução a Web
          </span>
        </Media>
      </Media>
    </th>
    <td>29 de Janeiro, 2020</td>
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
              João da Silva
          </span>
        </Media>
      </Media>
    </td>
    <td>
      Maceió, AL
    </td>
    <td>
      <div className="d-flex align-items-center">
        23
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
            Action
          </DropdownItem>
          <DropdownItem
            href="#pablo"
            onClick={e => e.preventDefault()}
          >
            Another action
          </DropdownItem>
          <DropdownItem
            href="#pablo"
            onClick={e => e.preventDefault()}
          >
            Something else here
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </td>
  </tr>
);