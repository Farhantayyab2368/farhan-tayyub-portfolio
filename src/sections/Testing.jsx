import { bugReports, projects, testCases, testingProcess } from '../data/portfolio.config';
import SectionHeading from '../components/SectionHeading';
import TestingCard from '../components/TestingCard';
import TestCaseTable from '../components/TestCaseTable';
import BugReportCard from '../components/BugReportCard';
import TestingProcess from '../components/TestingProcess';
import Reveal from '../components/Reveal';

export default function Testing({ onOpen }) {
  const qaProjects = projects.filter((p) => p.kind === 'testing');
  return (
    <section id="testing" aria-labelledby="testing-title" className="relative">
      <div className="absolute inset-x-0 top-0 -z-10 h-full bg-gradient-to-b from-transparent via-navy/25 to-transparent" aria-hidden />

      {/* Testing & QA projects */}
      <div className="section">
        <SectionHeading
          index="04"
          eyebrow="Quality Assurance"
          title="Testing & QA Projects"
          id="testing-title"
          text="How I test games and applications: what I checked, how many cases I ran, what I found and how severe it was."
        />
        <ul className="grid gap-6 lg:grid-cols-3">
          {qaProjects.map((p, i) => (
            <Reveal as="li" key={p.id} delay={i * 0.08}>
              <TestingCard project={p} onOpen={onOpen} />
            </Reveal>
          ))}
        </ul>
      </div>

      {/* Test cases */}
      <div className="section !pt-0">
        <SectionHeading
          eyebrow="QA Documentation"
          title="Test Case Examples"
          id="test-cases-title"
          as="h3"
          text="A sample of structured test cases. Select any row to open the full test case — steps, data, expected and actual results."
        />
        <Reveal>
          <TestCaseTable cases={testCases} />
        </Reveal>
      </div>

      {/* Bug reports */}
      <div className="section !pt-0">
        <SectionHeading
          eyebrow="Clear & reproducible"
          title="Bug Reporting"
          id="bug-reporting-title"
          as="h3"
          text="Each report gives developers what they need to reproduce and fix the issue quickly."
        />
        <ul className="grid items-start gap-5 md:grid-cols-2 xl:grid-cols-4">
          {bugReports.map((b, i) => (
            <Reveal as="li" key={b.id} delay={i * 0.06}>
              <BugReportCard bug={b} />
            </Reveal>
          ))}
        </ul>
      </div>

      {/* Testing process */}
      <div className="section !pt-0">
        <SectionHeading
          eyebrow="Workflow"
          title="Testing Process"
          id="testing-process-title"
          as="h3"
          text="The seven steps I follow on every testing assignment."
        />
        <Reveal>
          <TestingProcess steps={testingProcess} />
        </Reveal>
      </div>
    </section>
  );
}
