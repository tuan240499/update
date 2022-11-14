const dummyData = [
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    address: "Norberto Crossing",
    phone: "1-477-935-8478 x6430",
    website: "ola.org",
    company: "Considine-Lockman",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    address: "Rex Trail",
    phone: "210.067.6132",
    website: "elvis.io",
    company: "Johns Group",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    address: "Ellsworth Summit",
    phone: "586.493.6943 x140",
    website: "jacynthe.com",
    company: "Abernathy Group",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    address: "Dayna Park",
    phone: "(775)976-6794 x41206",
    website: "conrad.com",
    company: "Yost and Sons",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    address: "Kattie Turnpike",
    phone: "024-648-3804",
    website: "ambrose.net",
    company: "Hoeger LLC",
  },
];

export const server = () => {
  let store = dummyData;

  const getAll = () => {
    return Promise.resolve(store);
  };

  const getDetail = (id) => {
    return new Promise((resolve) => {
      resolve(store.find((elm) => elm.id === id));
    });
  };

  const remove = (id) => {
    let detail = getDetail(id);
    store = store.filter((elm) => elm.id !== id);
    return Promise.resolve(detail);
  };

  const update = (id, info) => {
    let detail = getDetail(id);
    Object.keys(detail).forEach((k) => {
      const isValidKey = Object.keys(info).includes(k);
      if (isValidKey) {
        detail[k] = info[k];
      }
    });

    const _mapStore = store.map((elm) => {
      if (elm.id === id) {
        return {
          ...elm,
          detail,
        };
      }
      return elm;
    });
    store = _mapStore;

    return Promise.resolve(detail);
  };

  return {
    getAll,
    getDetail,
    remove,
    update,
  };
};
