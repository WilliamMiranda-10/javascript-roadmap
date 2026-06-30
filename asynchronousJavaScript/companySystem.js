// Buscar empresa
const getCompany = (id) => {
  return new Promise((resolve, reject) => {
    const companyData = {
      id: 5,
      nome: "Império tech",
    };

    setTimeout(() => {
      if (id !== companyData.id) {
        reject(new Error("Empresa não encontrada."));
        return;
      }

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
   

      if (companyEmploeeId.length === 0) {
        reject(new Error("Funcionário não encontrado nesta companhia."));
        return;
      }

      resolve(companyEmploeeId);
    }, 1000);
  });
};
// busca projetos de cada funcionário
const getEmployeeProjects = (employeeName) => {
  return new Promise((resolve, reject) => {
    const employeeProjectsData = {
      William: [
        { id: 101, nome: "API financeira" },
        { id: 102, nome: "Sistema de Login" },
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

      resolve(employeeProjectsData[employeeName]);
    }, 1000);
  });
};

// busca as tarefas de cada projeto
const getProjectTasks = (projectId) => {
  return new Promise((resolve, reject) => {
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
      301: [{ id: 7, titulo: "Criar testes unitários" }],
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
  const company = await getCompany(5); // buscar a empresa

  const employees = await getEmployees(company); // buscar os funcionários da empresa

  //pegar o projeto de cada funcionário
  const projectPromises = employees.map((name) =>
    getEmployeeProjects(name.nome)
  );

  const employeeProjects = await Promise.all(projectPromises);

  // pega as tarefas de todos os projetos
  const taskPromiseByEmployee = employeeProjects.map((projects) => {
    const taskPromises = projects.map((project) => getProjectTasks(project.id));
    const projectTasks = Promise.all(taskPromises);
    return projectTasks;
  });

  const tasksByEmployee = await Promise.all(taskPromiseByEmployee);
  //montar relatório final
  const companyReport = employees.map((employee, employeeIndex) => {
    const projects = employeeProjects[employeeIndex].map(
      (project, projectIndex) => {
        const projectTasks = tasksByEmployee[employeeIndex][projectIndex];

        const taskTitles = projectTasks.map((task) => task.titulo);

        return {
          nome: project.nome,
          quantidadeTarefas: projectTasks.length,
          tarefas: taskTitles,
        };
      }
    );

    return {
      funcionario: employee.nome,
      cargo: employee.cargo,
      projetos: projects,
    };
  });

  console.log(JSON.stringify(companyReport, null, 2));
};

result();

// Promise.all garante que todas as tarefas dos projetos sejam carregadas
// antes de continuar a execução
