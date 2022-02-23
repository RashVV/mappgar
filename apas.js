&& item.title === 'All movies'  && item.title === 'TV series' && item.title === 'Tape' && item.title === 'Videos' && item.title === 'News'
/*
, AllmuviesDropdown, TVseriesDropdown, TapeDropdown, VideosDropdown,

<ul
        className={dropdown ? 'show__submenu-item clicked' : 'show__submenu-item'}
        onClick={() => setDropdown(!dropdown)}
      >
        {TVseriesDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <ul
        className={dropdown ? 'search__submenu-item clicked' : 'search__submenu-item'}
        onClick={() => setDropdown(!dropdown)}
      >
        {AllmuviesDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <ul
        className={dropdown ? 'feed__submenu-item clicked' : 'feed__submenu-item'}
        onClick={() => setDropdown(!dropdown)}
      >
        {TapeDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <ul
        className={dropdown ? 'videos__submenu-item clicked' : 'videos__submenu-item'}
        onClick={() => setDropdown(!dropdown)}
      >
        {VideosDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>

      */

      ------------------
     /* Styles={
        .mov__submenu-item {
            width: 10rem;
            position: flex;
            top: 67px;
            list-style: none;
            text-align: start;
          }
          .mov__submenu-item li {
            background: rgb(0, 212, 212);
            cursor: pointer;
          }
          .mov__submenu-item li a:hover {
            background: rgb(0, 175, 175);
          }
          .mov__submenu-item.clicked {
            display: none;
          }
          

      }
      */