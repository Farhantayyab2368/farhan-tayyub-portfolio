import {
  ArrowRight, ArrowUpRight, BadgeCheck, Briefcase, Bug, ClipboardCheck, ClipboardList,
  Download, FileSearch, FileText, Gamepad2, Globe, GraduationCap, LayoutGrid, ListChecks,
  Mail, Monitor, MousePointerClick, Palette, PenTool, RefreshCw, Repeat, ScanSearch, Search,
  ShieldCheck, Smartphone, Sparkles, Target, Wrench, Zap, Eye, Lightbulb, Layers, Users,
} from 'lucide-react';

/**
 * Icons that can be referenced by name from portfolio.config.js.
 * To use a new Lucide icon: import it above and add it to this map.
 */
export const icons = {
  ArrowRight, ArrowUpRight, BadgeCheck, Briefcase, Bug, ClipboardCheck, ClipboardList,
  Download, FileSearch, FileText, Gamepad2, Globe, GraduationCap, LayoutGrid, ListChecks,
  Mail, Monitor, MousePointerClick, Palette, PenTool, RefreshCw, Repeat, ScanSearch, Search,
  ShieldCheck, Smartphone, Sparkles, Target, Wrench, Zap, Eye, Lightbulb, Layers, Users,
};

export function getIcon(name) {
  return icons[name] || Sparkles;
}
