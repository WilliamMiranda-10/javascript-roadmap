// Buscar empresa
const getCompany = (id) => {
  return new Promise((resolve, reject) => {
    const companyData = {
      id: 2,
      nome: "Império tech",
    };

    setTimeout(() => {
      if (id !== companyData.id) {
        reject(new Error("Empresa não encontrada."));
        return;
      }

      console.log("compa", companyData.id);

      resolve(companyData.id);
    }, 1000);
  });
};

// buscar funcionarios/;
const getEmployees = (companyId) => {
  return new Promise((resolve, reject) => {
    const employeesData = [
      {
        id: 1,
        nome: "William",
        cargo: "Backend",
        companyId: 1,
      },
      {
        id: 2,
        nome: "Bruna",
        cargo: "Frontend",
        companyId: 1,
      },
      {
        id: 3,
        nome: "José",
        cargo: "QA",
        companyId: 2,
      },
    ];

    setTimeout(() => {
      const companyEmploeeId = employeesData.filter((employee) => {
        return employee.companyId === companyId;
      });
      console.log("teste CompanyEmploee", companyEmploeeId);

      if (!companyEmploeeId) {
        reject(new Error("Funcionário não encontrado dessa companhia."));
        return;
      }

      resolve(companyEmploeeId);
    });
  }, 1000);
};

const getEmployeeProjects = (employeeName) => {
  new Promise((resolve, reject) => {
    const employeeProjectsData = {
      William: [
        { id: 101, nome: "API financeira" },
        { id: 102, nome: "Sistema dde Login" },
      ],
      Bruna: [{ id: 201, nome: "Dashboard" }],
      José: [
        { id: 301, nome: "Testes automatizados" },
        { id: 302, nome: "Teste Mobile" },
      ],
    };

    setTimeout(() => {
      if (!employeeProjectsData[employeeName]) {
        reject(new Error("Não à projetos desse funcionário."));
        return;
      }
      console.log(
        "employeeProjectsData[employeeName",
        employeeProjectsData[employeeName]
      );

      resolve(employeeProjectsData[employeeName]);
    });
  }, 1000);
};

const getProjectTasks = (projectId) => {
  new Promise((resolve, reject) => {
    const tasksProjectData = {
      101: [
        { id: 1, titulo: "Criar rota" },
        { id: 2, titulo: "Criar middleware" },
      ],
      102: [
        { id: 3, titulo: "JWT" },
        { id: 4, titulo: "Refresh Token" },
      ],
      201: [
        {
          id: 5,
          titulo: "Integrar dados do dashboard",
          id: 6,
          titulo: "Criar gráficos do dashboard ",
        },
      ],
      301: [{ id: 6, titulo: "Criar testes unitários" }],
      302: [
        { id: 8, titulo: "Testar aplicação em dispositivos móveis" },
        { id: 9, titulo: "Testar responsividade" },
      ],
    };

    setTimeout(() => {
      resolve(tasksProjectData[projectId]);
    }, 1000);
  });
};

const result = async () => {
  const company = await getCompany(2);
  console.log("Company:", company);
  const employees = await getEmployees(company);
  const employeeName = employees.map((name)=> getEmployeeProjects(name.nome))

  console.log("Employees:", employees);
  console.log("Employees Name:", employeeName);

  

  
};

result();









