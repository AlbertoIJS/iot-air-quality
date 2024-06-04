class ApiClient {
  async get(route: string) {
    return fetch(`${process.env.API_URL!}${route}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async post(route: string, body: {}) {
    return fetch(`${process.env.API_URL!}${route}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }
}

export default new ApiClient();
